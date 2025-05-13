import {useRef} from "react";
import Canvas from "./components/Canvas";
import Left from "./components/Left";
import Navbar from "./components/Navbar";
import SideEmail from "./components/SideEmail";
import SideSocials from "./components/SideSocials";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Credits from "./sections/Credits";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
	const mainRef = useRef(false);

	const toggleBlur = () => {
		mainRef.current.classList.toggle("blurBody");
	};

	return (
		<div>
			{/* <Canvas /> */}
			<main className="h-screen px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]" ref={mainRef}>
				<Hero />
				<About />
				{/* <Skills /> */}
				<Projects />
				<Contact />
				<Credits />
			</main>
			{/* side socials */}
			<SideSocials />
			<SideEmail />
			<Navbar toggle={() => toggleBlur()} />
		</div>
	);
}

export default App;
