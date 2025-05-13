import { motion } from "framer-motion";
import React from "react";

const startVariants = {
  initial: {
    y: 1000,
  },
  end: {
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.4,
      duration: 0.8,
      delay: 1,
    },
  },
};

function SideSocials() {
  return (
    <motion.div
      className="hidden md:flex flex-col fixed bottom-0 md:left-5 lg:left-9 social-line min-w-[40px]"
      initial="initial"
      animate="end"
      variants={startVariants}
    >
      <div className="flex flex-row items-center mb-2 social-icon-box">
        <a
          href="https://github.com/zerabruck"
          target="_blank"
          rel="noreferrer"
          className="w-[40px] h-[40px] cursor-pointer p-[10px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="social-icon-svg text-theme-light-slate hover:stroke-theme-green hover:translate-y-[-3px]"
          >
            <title>GitHub</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
      <div className="flex flex-row items-center mb-2 social-icon-box">
        <a
          href="https://leetcode.com/u/zerabruck"
          target="_blank"
          rel="noreferrer"
          className="w-[40px] h-[40px] cursor-pointer p-[10px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="social-icon-svg text-theme-light-slate hover:stroke-theme-green hover:translate-y-[-3px]"
          >
            <title>LeetCode</title>
            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
          </svg>
        </a>
      </div>
      {/* <div className="flex flex-row items-center mb-2 social-icon-box">
				<a href="https://twitter.com/scisaif" aria-label="Twitter" rel="noopener noreferrer" target="_blank" className="w-[40px] h-[40px] cursor-pointer p-[10px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						role="img"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="social-icon-svg text-theme-light-slate hover:stroke-theme-green hover:translate-y-[-3px]">
						<title>Twitter</title>
						<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
					</svg>
				</a>
			</div> */}
      <div className="flex flex-row items-center mb-6 social-icon-box">
        <a
          href="https://www.linkedin.com/in/zerabruck-muluneh-920814258"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
          className="w-[40px] h-[40px] cursor-pointer p-[10px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="social-icon-svg text-theme-light-slate hover:stroke-theme-green hover:translate-y-[-3px]"
          >
            <title>LinkedIn</title>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default SideSocials;
