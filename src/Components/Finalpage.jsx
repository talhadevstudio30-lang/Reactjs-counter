import React, { useContext, useEffect } from 'react';
import { highscore } from '../Context/Context';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';



function Finalpage() {

  // ✅ useEffect must be inside the component
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const value = useContext(highscore)

  return (
    <>
      <div>
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white text-gray-800 rounded-3xl shadow-2xl p-8 w-full max-w-md text-center relative overflow-hidden"
          >
            {/* Glow effect behind the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 blur-2xl rounded-3xl"></div>

            <h1 className="text-3xl font-semibold mb-4 text-indigo-600 relative z-10" data-aos="fade-up"
              data-aos-delay="100">
              📊 Highest Score
            </h1>

            {/* Animated Score */}
            <motion.div
              className="text-6xl mt-8 font-extrabold text-indigo-700 mb-6 relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 15px rgba(99,102,241,0.5)",
                }}
                data-aos="fade-up"
                data-aos-delay="200"
                whileTap={{ scale: 0.95 }}
                className="border-2 bg-indigo-100 px-8 py-2 border-indigo-400 rounded-2xl transition duration-100 text-indigo-700"
              >
                {value.highscorevalue}
              </motion.button>

              <div className="mt-1">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgb(99,102,241)",
                    color: "#fff",
                    boxShadow: "0px 0px 15px rgba(99,102,241,0.6)",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  onClick={value.reset}
                  className="border-2 text-2xl font-medium bg-indigo-100 px-5 py-2 border-indigo-400 rounded-2xl transition duration-300 text-indigo-600"
                >
                  Reset
                </motion.button>
              </div>
            </motion.div>

            <motion.div
               data-aos="fade-up"
              data-aos-delay="400"
              className="bg-indigo-100 rounded-2xl p-4 mt-4 relative z-10 hover:bg-indigo-200 transition-all duration-100"
            >
              <p className="text-indigo-700 font-medium">
                You can check your highest score here 🏆
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div>
          <footer className='bg-white text-2xl  w-full text-center pt-3 pb-4.5'  >
            © {new Date().getFullYear()} Simple react counter app. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}

export default Finalpage;