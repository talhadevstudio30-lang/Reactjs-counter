import React, { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { counterContext } from "../Context/Context";
import Frontpage from "./Frontpage";
import AOS from "aos";
import "aos/dist/aos.css";

const Counter = () => {
    const value = useContext(counterContext);

    // ✅ Initialize AOS only once
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            {/* Front Page Header */}
            <div className="pt-1.5 pl-1.5 pr-1.5">
                <Frontpage />
            </div>

            {/* Main Counter Section */}
            <div className="min-h-screen flex items-center justify-center p-6">
                <motion.div
                    data-aos="fade-up"

                    className="bg-white text-gray-800 rounded-3xl shadow-2xl p-8 w-full max-w-sm text-center relative overflow-hidden"
                >
                    {/* Decorative Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 blur-3xl"></div>

                    <h1 className="text-3xl font-semibold mb-6 relative z-10" data-aos="fade-up"
                        data-aos-delay="100">
                        Reactjs Counter ⚡
                    </h1>
                    <div data-aos="fade-up" data-aos-delay="200" className="relative z-10">
                        {/* Animated Counter Value */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={value.result}
                                className="text-7xl font-bold text-indigo-600 mb-7 drop-shadow-md"
                                transition={{ duration: 0.2 }}
                            >
                                {value.result}
                            </motion.div>
                        </AnimatePresence>

                        {/* Counter Buttons */}
                        <div className="flex justify-center gap-6">
                            <motion.button
                                whileTap={{ scale: 0.80 }}
                                whileHover={{ scale: 1.2 }}
                                onClick={value.plus}
                                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold pb-1 px-6 rounded-2xl shadow-md text-3xl active:shadow-inner transition-all"
                            >
                                +
                            </motion.button>

                            <motion.button
                                whileTap={{ scale: 0.80 }}
                                whileHover={{ scale: 1.2 }}
                                onClick={value.minus}
                                className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold pb-1 py-3 px-6 rounded-2xl shadow-md text-3xl active:shadow-inner transition-all"
                            >
                                -
                            </motion.button>
                        </div>
                    </div>

                    {/* Reset Button with Motion Glow */}
                    <motion.div className="mt-4 relative z-10 flex justify-center">
                        <motion.button
                            data-aos="fade-up"
                            data-aos-delay="400"
                            onClick={value.resetbtn}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 0px 15px rgba(99,102,241,0.6)",
                                textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
                            }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                            }}
                            className="border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium py-2 px-6 rounded-xl transition-all duration-200 relative overflow-hidden"
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 bg-indigo-500/20 blur-lg rounded-xl"
                            ></motion.span>
                            <span className="relative z-10">Reset</span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div >

            {/* Footer */}
            < div className="grid justify-center items-center pl-1.5 pt-1 pb-1 p-1.5" >
                <footer className="bg-white text-xl md:text-2xl ml-1.5 rounded-2xl pt-2.5 pl-3.5 md:pl-4.5 md:pr-4.5 pr-3.5 pb-2.5 text-center" data-aos="fade-up"
                    data-aos-delay="100">
                    In this section you can check your total counters
                </footer>
            </div >
        </div >
    );
};

export default Counter;
