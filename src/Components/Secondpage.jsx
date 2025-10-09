import React, { useContext, useEffect } from 'react';
import { counterContext } from '../Context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Secondpage() {
  const value = useContext(counterContext);

  useEffect(() => {
    AOS.init({ duration: 500, once: true, easing: 'ease-in' });
  }, []);

  return (
    <>
      <div className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
        <div className="min-h-screen scroll-smooth flex items-center justify-center px-4">
          {/* Card Section */}
          <div
            data-aos="zoom-in-up"
            className="bg-white text-gray-800 rounded-3xl shadow-2xl p-8 w-full max-w-md text-center"
          >
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold mb-4 text-indigo-600" 
            >
              📊 Total Counter
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-6xl font-extrabold text-indigo-700 mb-6"
            >
              {value.result}
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-indigo-100 rounded-xl p-4"
            >
              <p className="text-indigo-700 font-medium">{value.message}</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          className="grid justify-center items-center pt-2 pb-3"
        >
          <footer className="bg-white text-xl md:text-2xl rounded-2xl px-6 py-3 text-center shadow-md hover:shadow-lg transition duration-300">
            Highest score information
          </footer>
        </div>
      </div>
    </>
  );
}

export default Secondpage;
