import React, {useRef, useEffect} from "react";
import logo from "../assets/logo-42.png";
import {Link} from "react-scroll";
import resume from "../assets/resume.pdf";
import {motion} from "framer-motion";

const startVariants = {
	initial: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			type: "tween",
			bounce: 0.4,
			duration: 0.1,
			staggerChildren: 0.1,
		},
	},
};

const pathVariants = {
	initial: {
		opacity: 0,
		pathLength: 0,
	},
	end: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 2,
			ease: "easeInOut",
		},
	},
};

const childVariants = {
	initial: {
		y: -30,
		opacity: 0,
	},
	end: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

function useOutsideAlerter(ref, toggleDrawer) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			// handle if clicked on menuBtn
			if (event.target.classList.contains("ham-box") || event.target.classList.contains("menuBtn") || event.target.classList.contains("ham-box-inner")) {
				return;
			}
			if (ref.current.classList.contains("drawer-hidden")) {
				return;
			}
			if (ref.current && !ref.current.contains(event.target)) {
				toggleDrawer();
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

function Navbar({toggle}) {
	const drawerRef = useRef(false);
	const hamRef = useRef(false);

	const toggleDrawer = () => {
		drawerRef.current.classList.toggle("drawer-visible");
		drawerRef.current.classList.toggle("drawer-hidden");
		hamRef.current.classList.toggle("cross");
		document.body.style.overflow = document.body.style.overflow === "hidden" ? "scroll" : "hidden";
		toggle();
	};
	useOutsideAlerter(drawerRef, toggleDrawer);

	return (
		<header className="navbar h-[100px] px-[25px] md:px-[40px] lg:px-[50px] flex justify-between items-center text-theme-lightest-slate font-sfMonoRegular z-[100]">
			<nav className="w-full  flex flex-row justify-between items-center">
				<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: "tween", duration: 0.5}} className="my-auto cursor-pointer min-w-[43px]  ">
					<Link to="hero" spy={true} smooth={true} offset={0} duration={500} className="my-auto cursor-pointer min-w-[43px]  ">
						{/* <img src={logo} alt="logo" /> */}
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
							<text fill="#64FFDA" fontFamily="Calibre-Medium, Calibre" fontSize="50" fontWeight="400" letterSpacing="4.167" opacity="1" transform="translate(36 33)">
								<tspan x="0.142" y="33">
									z
								</tspan>
							</text>
							<motion.path
								variants={pathVariants}
								initial="initial"
								animate="end"
								stroke="#64FFDA"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="5"
								d="M50 5L11 27v45l39 23 39-22V28z"></motion.path>
						</svg>
					</Link>
				</motion.div>
				<motion.div className="hidden sm:flex flex-row text-[13px] " initial="initial" animate="end" variants={startVariants}>
					<motion.div className="p-[10px]" variants={childVariants}>
						<Link to="about" spy={true} smooth={true} offset={0} duration={500} className="  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<span className="text-theme-green">01. </span> About
						</Link>
					</motion.div>
					{/* <motion.div className="p-[10px]" variants={childVariants}>
						<Link to="skills" spy={true} smooth={true} offset={0} duration={500} className="  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<span className="text-theme-green">02. </span> Skills
						</Link>
					</motion.div> */}
					<motion.div className="p-[10px]" variants={childVariants}>
						<Link to="projects" spy={true} smooth={true} offset={0} duration={500} className="  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<span className="text-theme-green">02. </span> Projects
						</Link>
					</motion.div>
					<motion.div className="p-[10px]" variants={childVariants}>
						<Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<span className="text-theme-green">03. </span> Contact
						</Link>
					</motion.div>
					<motion.div className="resume ml-4  border border-theme-green hover:bg-theme-green/10 cursor-pointer rounded flex items-center text-theme-green" variants={childVariants}>
						<a target="_blank" href={resume} rel="noreferrer" className="px-[16px] py-[12px] line">
							Resume
						</a>
					</motion.div>
				</motion.div>

				{/* mobile nav menu button */}
				<motion.button className="menuBtn sm:hidden" onClick={toggleDrawer} initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: "tween", duration: 0.5}}>
					<div className="ham-box">
						<div className="ham-box-inner" ref={hamRef}></div>
					</div>
				</motion.button>

				<aside className="drawer drawer-hidden" ref={drawerRef}>
					<div className="flex-row text-[16px] ">
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onClick={() => toggleDrawer()}
							className="p-[10px] flex flex-col justify-center  items-center font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="text-theme-green ">01. </div> <div className="mb-2 mt-1">About</div>
						</Link>
						<Link
							to="skills"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onClick={() => toggleDrawer()}
							className="p-[10px] flex flex-col justify-center  items-center  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="text-theme-green ">02. </div> <div className="mb-2 mt-1">Skills</div>
						</Link>
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onClick={() => toggleDrawer()}
							className="p-[10px] flex flex-col justify-center  items-center  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="text-theme-green ">03. </div> <div className="mb-2 mt-1">Projects</div>
						</Link>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onClick={() => toggleDrawer()}
							className="p-[10px] flex flex-col justify-center  items-center  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="text-theme-green ">04. </div> <div className="mb-2 mt-1">Contact</div>
						</Link>
						<div className="  mt-9 border border-theme-green rounded flex  items-center text-theme-green">
							<a target="_blank" href={resume} rel="noreferrer" className="px-[50px] py-[18px] line">
								Resume
							</a>
						</div>
					</div>
				</aside>
			</nav>
		</header>
	);
}

export default Navbar;
