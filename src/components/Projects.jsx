import React, { useEffect, useRef }  from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects({ title, description, highlights, imageUrl, githubUrl }) {

  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(imageRef.current, 
      { scale: 0.8 }, 
      {
        scale: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom', 
          end: 'top center', 
          scrub: true, 
          toggleActions: 'play none none none', 
          onLeaveBack: () => gsap.to(imageRef.current, { scale: 1 }), 
        },
      });
  }, []);

  return (
    <div className="p-5 overflow-hidden">
      
      <img src={imageUrl} alt={title} ref={imageRef} className="w-full h-auto object-cover" />
 
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h3 className="text-sm font-bold text-gray-700">HIGHLIGHTS:</h3>
          <ul className="list-disc pl-5 text-gray-600">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-2 mt-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-gray-500 hover:text-black flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.217.682-.483 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.07-.607.07-.607 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.09-.646.35-1.088.637-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.029-2.681-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.843c.85.004 1.706.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.544 1.377.2 2.394.098 2.647.64.698 1.028 1.59 1.028 2.681 0 3.841-2.337 4.687-4.565 4.935.36.31.682.92.682 1.852 0 1.338-.012 2.421-.012 2.751 0 .268.18.577.688.479C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
      </div>
    </div>
  );
}

export default Projects;
