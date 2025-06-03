// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { collection, getDocs, query, where, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Mousewheel } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMapMarkerAlt } from 'react-icons/fa';
import CatLogo from '../assets/CCAT.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';
import TNRBackground from '../assets/lala3.jpeg';

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Home = () => {
  const [featuredCats, setFeaturedCats] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const catCollection = collection(db, 'cats');
      const snapshot = await getDocs(catCollection);
      let catList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      catList = catList.sort(() => 0.5 - Math.random()).slice(0, 7);
      setFeaturedCats(catList);
    };
    fetchCats();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const today = new Date();
      const endOfWeek = new Date();
      const day = today.getDay();
      const daysUntilSunday = 7 - day;
      endOfWeek.setDate(today.getDate() + daysUntilSunday);

      const q = query(
        collection(db, 'Events'),
        where('date', '>=', Timestamp.fromDate(today)),
        where('date', '<=', Timestamp.fromDate(endOfWeek)),
        orderBy('date')
      );

      const snapshot = await getDocs(q);
      const events = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setUpcomingEvents(events);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
      gsap.from('.about-heading', {
        scrollTrigger: { trigger: '.about-heading', start: 'top 85%' },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from('.events-heading', {
        scrollTrigger: { trigger: '.events-heading', start: 'top 85%' },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from('.furry-heading', {
        scrollTrigger: { trigger: '.furry-heading', start: 'top 85%' },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
    {/* Hero Section */} 
     <motion.section
  className="relative w-screen h-[85vh] bg-cover bg-[center_95%] bg-no-repeat flex items-center justify-center text-center px-4 text-white"
  style={{ backgroundImage: `url(${TNRBackground})` }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/25 z-0" />

  {/* Text content */}
  <div className="relative z-10 mt-24 text-center px-4">
    <h1 className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg">
      Changing Lives, One Cat at a Time.
    </h1>
    <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md">
      Join Catapalooza in giving every stray cat and kitten a second chance.
    </p>
  </div>

{/* SVG wave transition */}
<svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="#B6D9EF" d="M0,0 C720,100 720,100 1440,0 L1440,100 L0,100 Z" />
</svg>
</motion.section>

{/* Blue Section Above About */}
<motion.section
  className="relative bg-[#B6D9EF] text-[#1D3557] pt-1 pb-[70px] px-4 text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <h2 className="text-3xl md:text-4xl font-bold mb-2 -mt-1">
    Together, We Can Make a Difference.
  </h2>
  <p className="text-base md:text-lg max-w-2xl mx-auto mb-4 -mt-1">
  </p>
  <div className="flex justify-center gap-3 flex-wrap">
    <Link to="/help/donate">
      <button className="bg-[#1D3557] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#16324F] transition">
        Donate
      </button>
    </Link>
    <Link to="/about">
      <button className="border-2 border-[#1D3557] text-[#1D3557] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#1D3557] hover:text-white transition">
        Learn More
      </button>
    </Link>
  </div>
</motion.section>





      <div className="text-gray-800">
{/* About Section */}
<motion.section
  className="py-24 px-6 bg-[#E5F3FB]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
    {/* Text Section */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="about-heading text-4xl font-bold text-[#1D3557] mb-6">
        About Catapalooza
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        Catapalooza is a passionate nonprofit organization committed to rescuing, fostering, and rehoming stray and abandoned cats.
        We believe every feline deserves a second chance at a loving life.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        Through dedicated volunteers and community outreach, we provide safe havens for cats in need, offer foster care services,
        promote responsible pet ownership, and help match cats with their perfect forever families.
      </p>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 flex flex-col items-center relative group">
      <Link to="/about" className="flex flex-col items-center">
        <img
          src={CatLogo}
          alt="Catapalooza Logo"
          className="w-72 h-72 object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <motion.p
          className="mt-2 text-[#3C8DBC] font-bold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Click me to learn more!
        </motion.p>
      </Link>
    </div>
  </div>
</motion.section>



        {/* Events Section */}
        <motion.section
          className="py-8 px-6 text-center bg-[#f5f5f5]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="events-heading text-4xl font-bold mb-6 text-[#1D3557]">Upcoming Events</h2>
          {upcomingEvents.length > 0 ? (
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 text-left">
              <div className="text-[#3C8DBC] text-sm font-semibold mb-2">
                {new Date(upcomingEvents[0].date.seconds * 1000).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                })}
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#1D3557]">{upcomingEvents[0].title}</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <FaMapMarkerAlt className="text-[#F4A261]" />
                <span>{upcomingEvents[0].location}</span>
              </div>
              <p className="text-gray-700">{upcomingEvents[0].description}</p>
            </div>
          ) : (
            <p className="text-gray-600">No events this week! Check back soon.</p>
          )}
        </motion.section>




        {/* Meet Our Furry Friends Section */}
        <motion.section
          className="bg-[#f9fbfc] py-20 px-6 text-center overflow-visible"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="furry-heading text-3xl font-bold mb-12 text-[#1D3557]">
            Meet Our Furry Friends
          </h2>

          <div className="max-w-5xl mx-auto overflow-visible">
            <Swiper
              modules={[Pagination, FreeMode, Mousewheel]}
              spaceBetween={30}
              slidesPerView={1.2}
              centeredSlides={true}
              freeMode={true}
              loop={true}
              speed={600}
              mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
              pagination={{ clickable: true, el: '.custom-pagination' }}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16"
            >
              {featuredCats.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <motion.div
                    className="cat-card bg-white rounded-3xl overflow-hidden shadow-lg h-[24rem] flex flex-col justify-center relative transition-transform hover:scale-105 duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    {cat.imageUrl && (
                      <img
                        src={cat.imageUrl}
                        alt={cat.name}
                        className="object-cover w-full h-full"
                      />
                    )}
                    <Link
                      to="/cats"
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#6C8FBF] text-white font-bold px-6 py-2 rounded-full text-lg hover:bg-[#4A648C] transition"
                    >
                      {cat.name}
                    </Link>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;