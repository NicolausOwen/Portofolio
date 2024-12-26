import React from 'react'

function Contact() {

    const links = [
        {
          icon: "✉️",
          label: "Email",
          description: "picklelus@gmail.com",
          href: "mailto:picklelus@gmail.com",
        },
        {
            icon: "📸",
            label: "Instagram",
            description: "Contact Me On Insta!",
            href: "https://www.instagram.com/owennicolaus/",
          },
        {
          icon: "🔗",
          label: "LinkedIn",
          description: "Work related background",
          href: "https://www.linkedin.com/in/nicolaus-owen-marvell-0b6675324/",
        },
      ];
    
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between bg-white min-h-screen">
      {/* Left Section */}
      <div className=" pl-2 lg:w-1/2 space-y-6 bg-gray-100 lg:h-[100vh]">
        <div className="m-10 lg:mt-[45%]">
          <h1 className="text-4xl font-bold text-gray-800">Hey, I’m Nicolaus Owen Marvell.</h1>
          <p className="text-xl text-gray-600">
            I am a college student passionate about web development. 
          </p>
        </div>
        <p className="m-10 text-gray-600">
            I thrive on challenges and continuously improve my skills, aiming to become a professional web developer.
        </p>
        <button className="m-10 px-6 py-3 text-white bg-black rounded hover:bg-gray-800">
          Let’s work together →
        </button>
      </div>

      {/* Right Section */}
      <div>
        <div className="flex flex-col justify-center min-h-screen p-8 bg-gray-100 text-gray-800 lg:bg-white lg:mx-[10vw]">
            <code className="text-sm font-semibold uppercase text-gray-600 tracking-widest">
                Let’s Work Together
            </code>
            <h1 className="mt-1 text-2xl font-bold text-left">
                I’m always interested in exploring new opportunities, collaborating, or
                exchanging ideas with like-minded individuals.
            </h1>
            <p className="mt-1 text-left text-gray-600">
                Feel free to contact me if you’d like to discuss a potential project.
            </p>
            <div className="w-full mt-8 space-y-4">
                {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}    
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                    <div className="flex items-center space-x-4">
                    <span className="text-2xl">{link.icon}</span>
                    <div>
                        <p className="font-medium">{link.label}</p>
                        <p className="text-sm text-gray-500">{link.description}</p>
                    </div>
                    </div>
                </a>
                ))}
            </div>
            <footer className="mt-10 text-sm text-gray-500">
            Built with React | ©2024 by Nicolaus Owen Marvell
            </footer>
        </div>
      </div>
    </div>  
  )
}

export default Contact