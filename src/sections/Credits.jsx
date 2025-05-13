import React from "react";

function Credits() {
	return (
		<section id="credits" className="mb-7 mt-12 max-w-[600px]  text-white/25 flex flex-col justify-center items-center   mx-auto font-sfMonoRegular ">
			<div className="flex flex-row md:hidden mt-[50px]">
				<div className="flex flex-row items-center mr-5">
					<a href="https://github.com/SciSaif" target="_blank" rel="noreferrer" className="w-[40px] h-[40px] cursor-pointer p-[10px]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-theme-light-slate hover:stroke-theme-green ">
							<title>GitHub</title>
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
						</svg>
					</a>
				</div>
				<div className="flex flex-row items-center mr-5">
					<a href="https://www.instagram.com/rahmansaifullah/" aria-label="Instagram" rel="noopener noreferrer" target="_blank" className="w-[40px] h-[40px] cursor-pointer p-[10px]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-theme-light-slate hover:stroke-theme-green ">
							<title>Instagram</title>
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
							<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
						</svg>
					</a>
				</div>
				<div className="flex flex-row items-center mr-5">
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
							className="text-theme-light-slate hover:stroke-theme-green ">
							<title>Twitter</title>
							<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
						</svg>
					</a>
				</div>
				<div className="flex flex-row items-center ">
					<a href="https://www.linkedin.com/in/scisaif/" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank" className="w-[40px] h-[40px] cursor-pointer p-[10px]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-theme-light-slate hover:stroke-theme-green ">
							<title>LinkedIn</title>
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
							<rect x="2" y="9" width="4" height="12"></rect>
							<circle cx="4" cy="4" r="2"></circle>
						</svg>
					</a>
				</div>
			</div>
			<div className="w-fit flex flex-col  mt-[20px] mb-4">
				<a
					href="https://github.com/zerabruck"
					target="_blank"
					rel="noreferrer"
					className=" flex flex-col text-theme-light-slate items-center text-[12px] font-sfMonoRegular mb-2 hover:text-theme-green">
					Created by
					<div className="mt-1">Zerabruck Muluneh</div>
				</a>
				<a href="https://github.com/bchiang7" target="_blank" rel="noreferrer" className="text-theme-light-slate flex items-center text-[12px] font-sfMonoRegular hover:text-theme-green ">
					Designed by Brittany Chiange
				</a>
			</div>
		</section>
	);
}

export default Credits;
