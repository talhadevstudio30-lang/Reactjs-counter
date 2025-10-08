import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { div } from "framer-motion/client";

function Frontpage() {
  // ✅ useEffect must be inside the component
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <header
          className="bg-white shadow-md w-full lg:w-4xl scroll-smooth rounded-3xl"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="max-w-6xl mx-auto px-3 py-4 text-center flex items-center justify-between">
            {/* Logo / App Name */}
            <h1 className="text-2xl font-semibold mr-1.5 text-indigo-600 hover:text-indigo-800 transition-colors duration-300" data-aos="fade-down"
              data-aos-delay="200">
              ⚡ React Counter
            </h1>

            {/* Navigation / Actions */}
            <nav className="flex gap-3 justify-center items-center scroll-smooth text-center ml-2.5 mr-1" data-aos="fade-down"
              data-aos-delay="200">
              <Link
                to="Total"
                smooth={true}
                duration={400}
                className="text-gray-700 scroll-smooth hover:text-indigo-600 font-medium transition-colors duration-300"
              >
                Total
              </Link>
              <Link
                to="Score"
                smooth={true}
                duration={400}
                className="text-gray-700 scroll-smooth hover:text-indigo-600 font-medium transition-colors duration-300"
              >
                Highscore
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Frontpage;
