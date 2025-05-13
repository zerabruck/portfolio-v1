import {motion} from "framer-motion";
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

function SideEmail() {
	return (
		<motion.div className="hidden md:flex flex-col items-center fixed bottom-0 md:right-5 lg:right-8 min-w-[40px]  social-line" initial="initial" animate="end" variants={startVariants}>
			<a href="mailto:zerabruckm@gmail.com" target="_blank" rel="noreferrer" className="email social-icon-box text-theme-light-slate font-sfMonoRegular text-[12px] mb-6 p-2">
				zerabruckm@gmail.com
			</a>
		</motion.div>
	);
}

export default SideEmail;
