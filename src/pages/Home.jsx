import React, { useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

import { gsap } from 'gsap';

const projects = [
  {
    title: 'SIFEST 2024',
    description: 'Developing a responsive and user-friendly website for SI FEST, a national-scale event organized by HIMSI FASILKOM UNSRI, focused on providing insights into 5.0 technology. The website showcases event details, registration for competitions, and an interactive experience for attendees and participants.',
    highlights: [
      'Laravel',
      'SCSS/SASS',
      'MySQL',
      'PHP',
    ],
    imageUrl: '../assets/SIFEST.png',
    githubUrl: 'https://github.com/NicolausOwen/Sifest2024'
  },

  {
    title: 'SMART_APP',
    description: 'Developing a Website for an Internal Project, an intuitive platform designed to streamline student registration processes. The application provides an easy-to-use interface for students to register, manage their details, and track their progress, enhancing efficiency and user experience.',
    highlights: [
      'Laravel',
      'Vue',
      'Inertia',
      'MySQL',
    ],
    imageUrl: '../assets/SMART_APP.png',
    githubUrl: 'https://github.com/NicolausOwen/SMART_APP'
  }
];

function Home() {

  const textRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const welcomeText = textRef.current.innerText;
    const welcomeChars = welcomeText.split('');
    textRef.current.innerHTML = welcomeChars.map(char => `<span>${char}</span>`).join('');

    // Welcome animation
    gsap.fromTo(textRef.current.children, {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.1,
      stagger: 0.2, 
      ease: 'none',
    });

    const descriptionText = descriptionRef.current.innerText;
    const descriptionChars = descriptionText.split('');
    descriptionRef.current.innerHTML = descriptionChars.map(char => `<span>${char}</span>`).join('');

    // Description animation
    gsap.fromTo(descriptionRef.current.children, {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.01,
      stagger: 0.015, 
      ease: 'none',
      delay: 0.1, 
    });
  }, []);

  return (
    <>

      <NavBar />

      <div className="font-sans sm:mx-[10vw] md:mx-[15vw] lg:mx-[25vw]">

        {/* HEADER*/}
        <section className="my-[20vh] bg-white text-center p-8">
          <h1 ref={textRef} className="text-7xl font-bold mb-4">
            Welcome.
          </h1>
          <p ref={descriptionRef} className="text-gray-600 mb-6">
            My Name is Nicolaus Owen Marvell, I am a college student passionate about web development. I thrive on challenges and continuously improve my skills, aiming to become a professional web developer. Explore my projects to see my journey and progress. I hope to create something spectacular together!.
          </p>
          <a href='/contact' className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800">
            Open for Work - Let&apos;s Talk!
          </a>
        </section>

        {/* EXPRERIENCE */}
        <div className="mt-[30vh] mx-10">
          <h1 className="text-4xl font-bold">My Exprerience</h1>
          <p className="mt-4 text-gray-600">
            Description.
          </p>
        </div>

        {/* Experience Section */}
        <section className='m-10'>
          {/* Experience 1 */}
          <div className="mb-12">

            <div className="flex justify-between">
              <h3 className="text-xl font-bold">Orginizing Committee · SI FEST 2024</h3>
              <p className="text-gray-600">Jun 2024 — Des 204</p>
            </div>

            <p className="mt-2 text-gray-600">
            - Developed and maintained the SI FEST website to facilitate registration services and serve as an information platform for the event, contributing as a full-stack developer.<br/>
            - Directed and coordinated the efforts of the IT division in the development and enhancement of the SI FEST website.<br/>
            - Collaborated with cross-functional teams to curate and manage content displayed on the website.<br/>
            </p>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="bg-gray-700 text-white py-1 px-3 rounded">Laravel</span>
              <span className="bg-gray-700 text-white py-1 px-3 rounded">PHP</span>
              <span className="bg-gray-700 text-white py-1 px-3 rounded">MySQL</span>
              <span className="bg-gray-700 text-white py-1 px-3 rounded">SCSS/SASS</span>
              <span className="bg-gray-700 text-white py-1 px-3 rounded">JavaScript</span>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <div className="p-4" id='projects'>
          <h1 className="text-5xl font-bold mx-5">
            My Works
          </h1>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <Projects
                key={index}
                title={project.title}
                description={project.description}
                highlights={project.highlights}
                quote={project.quote}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>

        <p className="my-[5vh] p-4 font-normal">Loosely designed using <a className='hover:text-indigo-500 text-gray-500' href='https://www.canva.com'>Canva</a> & <a className='hover:text-red-500 text-gray-500' href='https://www.figma.com'>Figma</a> and coded by me in <a className='hover:text-blue-500 text-gray-500' href='https://code.visualstudio.com'>Visual Studio</a>. Built with <a className='hover:text-blue-400 text-gray-500' href='https://react.dev'>React</a> and <a className='hover:text-blue-400 text-gray-500' href='https://tailwindcss.com'>Tailwind CSS</a>, deployed with <a className='hover:text-gray-900 text-gray-500' href='https://vercel.com'>Vercel</a>.</p>

        {/* CONTACTS */}
        <div className="my-10 p-8 font-sans">
          <code className="text-2xl font-bold">How I can help you?</code>
          <p className="text-md mt-4 leading-relaxed">
            I'm a college student with experience in web development. I can assist
            with building, optimizing, and improving websites or web applications
            that meet your goals.
          </p>
          <div className="mt-6">
            <code className="font-bold text-lg">I can help you to:</code>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-300 border border-gray-300 rounded-full text-sm">
                <i className="fa-solid fa-globe text-blue-500"></i>
                Build a new website
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 border border-gray-300 rounded-full text-sm">
                <i className="fa-solid fa-rocket text-green-500"></i>
                Optimize performance
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-100 border border-gray-300 rounded-full text-sm">
                <i className="fa-solid fa-bug text-red-500"></i>
                Fix bugs and issues
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 border border-gray-300 rounded-full text-sm">
                <i className="fa-solid fa-plus text-purple-500"></i>
                Add new features
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 border border-gray-300 rounded-full text-sm">
                <i className="fa-solid fa-paintbrush text-yellow-500"></i>
                Enhance user experience
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;