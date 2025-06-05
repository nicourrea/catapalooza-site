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
import { FaArrowRight } from 'react-icons/fa';
import CatLogo from '../assets/CCAT.png';
import Trap from '../assets/Trap.png';
import Neuter from '../assets/Nueter.png';
import Release from '../assets/Release.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';
import adoptionSuccess from '../assets/adoption_success.png';
import donateCat from '../assets/donate-cat.png';
import volunteer from '../assets/Volunteers.jpg';
import successStory from '../assets/success_stories.png';
import TNRBackground from '../assets/lala3.jpeg';
import mobile1 from '../assets/mobile1.png';
import mobile2 from '../assets/mobile2.png';
import mobile3 from '../assets/mobile3.jpg';
import mobile4 from '../assets/mobile4.png';


gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const supportOptions = [
  {
    label: "Adopt",
    key: "adopt",
    img: adoptionSuccess,
    mobileImg: mobile1,
    text: "Adopting from Catapalooza gives our cats the safe, loving homes they deserve. Learn how you can begin the adoption process today.",
    link: "/cats",
    buttonText: "View Cats",
  },
  {
    label: "Donate",
    key: "donate",
    img: donateCat,
    mobileImg: mobile2,
    text: "Your donations help us fund critical medical procedures, food, shelter, and TNR efforts. Every dollar goes directly to the cats.",
    link: "/howtohelp",
    buttonText: "Donate Now",
  },
  {
    label: "Volunteer",
    key: "volunteer",
    img: volunteer,
    mobileImg: mobile3,
    text: "Become a volunteer and help us with events, fosters, transport, and community outreach. We’re powered by people like you.",
    link: "/howtohelp",
    buttonText: "Get Involved",
  },
  {
    label: "Join Us",
    key: "join",
    img: successStory,
    mobileImg: mobile4,
    text: "Get involved by joining us at an upcoming event! We host adoptions every Saturday and Sunday at PetSmart — come meet the team and be part of the Catapalooza family.",
    link: "/events",
    buttonText: "View Events",
  },
];

const fadeStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Home = () => {
  const [featuredCats, setFeaturedCats] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [selectedOption, setSelectedOption] = useState("adopt"); // ✅ MOVE THIS HERE


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
   {/* Hero Section (with motion) */}
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

  {/* Animated Text */}
  <motion.div
    className="relative z-10 text-center px-4 mt-[60vh] pro:mt-[50vh] promax:mt-[46vh] md:mt-16 lg:mt-32 xl:mt-40"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <h1 className="text-[2rem] pro:text-[2.3rem] promax:text-[2.5rem] md:text-7xl font-bold mb-4 drop-shadow-lg leading-snug md:leading-tight max-w-[90%] md:max-w-none mx-auto">
      Changing Lives,<br className="block md:hidden" /> One Cat at a Time.
    </h1>
    <p className="text-base pro:text-lg promax:text-xl md:text-2xl max-w-xs pro:max-w-sm promax:max-w-md md:max-w-2xl mx-auto drop-shadow-md">
      Join Catapalooza in giving every stray cat and kitten a second chance.
    </p>
  </motion.div>

  {/* SVG wave (no animation) */}
  <svg className="absolute bottom-0 left-0 w-full block" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path fill="#B6D9EF" d="M0,0 C720,100 720,100 1440,0 L1440,100 L0,100 Z" />
  </svg>
</motion.section>

{/* Blue Section (static wrapper, animated content) */}
<section className="relative bg-[#B6D9EF] text-[#1D3557] -mt-px pt-4 pb-[50px] px-4 text-center">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-2 -mt-1">
      Together, We Can Make a Difference.
    </h2>
    <p className="text-base md:text-lg max-w-2xl mx-auto mb-4 -mt-1"></p>
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
  </motion.div>
</section>





      <div className="text-gray-800">
{/* About Section */}
<motion.section
  className="py-24 px-6 bg-[#f9fbfc]"
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

<motion.div
  className="bg-[#e4f2f9] py-8 px-6 text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }}

>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-[#1D3557]">
    {/* Stats Section */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      }}
    >
      <h3 className="text-4xl font-bold">1,500+</h3>
      <p className="text-lg mt-1">Cats Neutered</p>
    </motion.div>

    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      }}
    >
      <h3 className="text-4xl font-bold">2,000+</h3>
      <p className="text-lg mt-1">Cats Rehomed</p>
    </motion.div>

    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      }}
    >
      <h3 className="text-4xl font-bold">75+</h3>
      <p className="text-lg mt-1">Volunteers Since 2018</p>
    </motion.div>

  </div>
</motion.div>

<motion.section
  className="py-20 px-6 text-center bg-[#B6D9EF]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <h2 className="text-4xl font-bold mb-12 text-[#1D3557]">The Purrfect Rescue Routine</h2>

  <div className="max-w-6xl mx-auto grid gap-16 grid-cols-1 md:grid-cols-3">
    {/* TNR Section */}
    {/* Trap */}
    <div className="flex flex-col items-center text-[#1D3557]">
      <div className="w-52 h-52 rounded-full overflow-hidden shadow-xl hover:scale-105 transition duration-300">
        <img src={Trap} alt="Trap" className="object-cover w-full h-full" />
      </div>
      <h3 className="text-2xl font-bold mt-6 mb-2">Trap</h3>
      <p className="text-base max-w-sm">
        We humanely trap community cats using safe equipment and experienced volunteers.
      </p>
    </div>

    {/* Neuter */}
    <div className="flex flex-col items-center text-[#1D3557]">
      <div className="w-52 h-52 rounded-full overflow-hidden shadow-xl hover:scale-105 transition duration-300">
        <img src={Neuter} alt="Neuter" className="object-cover w-full h-full" />
      </div>
      <h3 className="text-2xl font-bold mt-6 mb-2">Neuter</h3>
      <p className="text-base max-w-sm">
        Cats are spayed or neutered, vaccinated, and treated before returning home.
      </p>
    </div>

    {/* Release */}
    <div className="flex flex-col items-center text-[#1D3557]">
      <div className="w-52 h-52 rounded-full overflow-hidden shadow-xl hover:scale-105 transition duration-300">
        <img src={Release} alt="Release" className="object-cover w-full h-full" />
      </div>
      <h3 className="text-2xl font-bold mt-6 mb-2">Return</h3>
      <p className="text-base max-w-sm">
        Once healed, cats are returned to their community—happy, fixed, and no longer reproducing.
      </p>
    </div>

  </div>
</motion.section>

<motion.section
  className="bg-[#E5F3FB] py-20 px-6 text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1D3557]">
    Supporting Catapalooza
  </h2>

  {/* Card */}
  <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">

    {/* Mobile Image */}
    <img
      src={supportOptions.find((opt) => opt.key === selectedOption)?.mobileImg}
      alt={selectedOption}
      className="w-full h-[34rem] object-cover md:hidden"
    />

    {/* Desktop Image */}
    <img
      src={supportOptions.find((opt) => opt.key === selectedOption)?.img}
      alt={selectedOption}
      className="w-full h-[34rem] object-cover hidden md:block"
    />

    {/* Buttons Grid - Mobile (2x2) | Desktop (inline) */}
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[20rem] grid grid-cols-2 gap-3 z-10 
                    md:flex md:justify-center md:gap-4 md:w-auto md:max-w-none md:left-1/2 md:top-6 md:transform">
      {supportOptions.map(({ label, key }) => (
        <button
          key={key}
          onClick={() => setSelectedOption(key)}
          className={`px-4 py-1.5 md:px-5 md:py-1.5 rounded-full border-2 text-sm md:text-[0.95rem] font-semibold transition backdrop-blur-sm ${
            selectedOption === key
              ? 'bg-[#1D3557] text-white border-[#1D3557]'
              : 'text-[#1D3557] border-[#1D3557] bg-white bg-opacity-80 hover:bg-[#1D3557] hover:text-white'
          }`}
        >
          {label}
        </button>
      ))}
    </div>

    {/* Floating Text Box - Responsive Positioning */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                    md:left-auto md:right-8 md:transform-none 
                    bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-6 
                    w-[90%] md:w-[22rem] shadow-lg text-left">
      <Link
        to={supportOptions.find((opt) => opt.key === selectedOption)?.link}
        className="group inline-flex items-center gap-1 relative text-xl md:text-2xl font-bold mb-3 text-[#1D3557] transition-colors duration-300 ease-in-out hover:text-[#3C8DBC]"
      >
        {supportOptions.find((opt) => opt.key === selectedOption)?.label}
        <span
          className="inline-block transform transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100"
          aria-hidden="true"
        >
          →
        </span>
        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#3C8DBC] transition-all duration-300 ease-in-out group-hover:w-full" />
      </Link>

      <p className="text-sm md:text-base text-[#1D3557] leading-relaxed">
        {supportOptions.find((opt) => opt.key === selectedOption)?.text}
      </p>
    </div>
  </div>
</motion.section>

        {/* Meet Our Furry Friends Section */}
        <motion.section
          className="bg-[#ffffff] py-20 px-6 text-center overflow-visible"
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