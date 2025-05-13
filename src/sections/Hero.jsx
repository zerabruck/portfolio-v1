import {motion} from "framer-motion";
import React, {useEffect, useRef} from "react";

const startVariants = {
	initial: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			type: "tween",
			bounce: 0.4,
			duration: 0.4,
			delay: 1,
		},
	},
};

function Hero() {
	const btnRef = useRef(null);

	useEffect(() => {
		let rect = btnRef.current.getBoundingClientRect();

		console.log(rect);
	}, []);
	return (
		<motion.section
			id="hero"
			className="h-screen max-w-[1000px]  text-white/25 flex flex-col justify-center   mx-auto font-sfMonoRegular"
			initial="initial"
			animate="end"
			variants={startVariants}>
			<div className="">
				<h1 className="text-theme-green mb-[15px] ml-[4px] ">Hi, my name is </h1>
			</div>
			<h2 className="name-heading font-calibreRegular text-[40px] font-bold text-theme-gray-light pt-0">Zerabruck Muluneh.</h2>
			<h3 className="sub-heading font-calibreRegular text-[40px] font-bold text-theme-gray-deep pt-0 ">I like to build webapps.</h3>
			<p className="bio max-w-[540px] mt-[20px] text-[20px] text-theme-gray-deep font-calibreRegular">
			Experienced in developing and deploying full-featured, robust and scalable web applications from scratch to production
			</p>
			<div
				ref={btnRef}
				className="flex items-center border rounded cursor-pointer w-fit mt-9 border-theme-green hover:bg-theme-green/10 text-theme-green">
				<a target="_blank" rel="noreferrer" href="" className=" px-[50px] py-[18px]">
					Check out my work!
				</a>
			</div>
		</motion.section>
	);
}

export default Hero;
