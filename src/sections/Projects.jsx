import React from "react";
import {motion, Variants} from "framer-motion";
import jobbedInHome from "@assets/jobbedInHome.png";
import {animateSection} from "../utils/animateSection";

import {data} from "../data/projects.js";
const projects = data.projects;

const cardVariants = (percent) => {
	return {
		offscreen: {
			width: 0,
		},
		onscreen: {
			width: `${percent}%`,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};
};

function Projects() {
	return (
		<section id="projects" className="py-[80px] sm:py-[100px] max-w-[1000px]   text-white/25 flex flex-col justify-center   mx-auto font-sfMonoRegular overflow-x-hidden">
			<div className="about-heading w-fit flex flex-row  mt-[10px] mb-[40px] ">
				<div className="text-theme-green flex items-center text-[15px] sm:text-[20px]">03. </div>
				<h1 className="text-theme-gray-light  min-w-fit ml-[10px] text-[26px] sm:text-[32px]  flex justify-center items-center font-calibreSemiBold fontFix">Some things I've built</h1>
			</div>

			{projects.map((project, index) => (
				<div key={index} className="project-box flex flex-col  justify-center items-center min-h-full text-[20px] font-calibreRegular text-theme-gray-deep font-medium mb-[40px] sm:mb-[100px]">
					<div className={`flex flex-row justify-start ${index % 2 !== 0 ? "sm:justify-start" : "sm:justify-end"} w-full relative lg:mt-[50px] `}>
						<div className={`absolute  top-1/2 translate-y-[-50%] ${index % 2 !== 0 && "flex justify-end"} object-cover  w-full h-full sm:w-fit sm:h-fit opacity-20 sm:opacity-100`}>
							<a href={project.website} target="_blank" rel="noreferrer" className="w-full sm:max-w-[60%] h-full image-top  ">
								<div className="image-cover w-full h-full sm:w-fit sm:h-fit  ">
									<img src={project.img} alt="JobbedIn home page" className="object-cover w-full h-full sm:w-fit sm:h-fit " />
								</div>
							</a>
						</div>
						<div
							className={`w-full sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] p-6 sm:p-0 flex flex-col items-start ${index % 2 !== 0 ? "sm:items-start" : "sm:items-end"}  h-full  z-10`}>
							<div className="text-theme-green my-2 font-sfMonoRegular text-[13px] ">Featured Project</div>
							<a href={project.website} target="_blank" rel="noreferrer" className="font-calibreSemiBold text-[28px] text-theme-gray-light mb-5 hover:text-theme-green cursor-pointer ">
								{project.title}
							</a>
							<div className="relative w-full project-card">
								<div className="sm:p-6   sm:bg-theme-light-navy rounded text-theme-light-slate z-10 text-[18px] sm:text-[20px] ">
									<p>{project.description}</p>
								</div>
							</div>
							<div className=" relative w-full z-10 mt-[25px] ">
								<div
									className={`flex flex-row flex-wrap justify-start  ${
										index % 2 !== 0 ? "sm:justify-start" : "sm:justify-end"
									} my-[10px] sm:my-0 rounded text-theme-lightest-slate z-11`}>
									{project.technologies.map((technology, i) => (
										<div key={i} className={`${index % 2 !== 0 ? "sm:mr-[20px]" : "sm:ml-[20px] sm:mr-0"} mr-[20px]   mb-[5px] text-[13px] font-sfMonoRegular`}>
											{technology}
										</div>
									))}
								</div>
							</div>
							<div className={`flex flex-row items-center translate-x-[-10px]  ${index % 2 !== 0 ? "sm:translate-x-[-10px]" : "sm:translate-x-[10px]"}`}>
								<a href={project.github} target="_blank" rel="noreferrer" className="w-[40px] h-[40px] cursor-pointer p-[10px]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-theme-gray-light hover:stroke-theme-green ">
										<title>GitHub</title>
										<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
									</svg>
								</a>
								<a href={project.website} target="_blank" rel="noreferrer" className="w-[42px] h-[38px] cursor-pointer p-[10px]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-theme-gray-light hover:stroke-theme-green mt-[-4px]">
										<title>External Link</title>
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										<polyline points="15 3 21 3 21 9"></polyline>
										<line x1="10" y1="14" x2="21" y2="3"></line>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

function animatedSection() {
	return animateSection(Projects);
}

export default animatedSection;
