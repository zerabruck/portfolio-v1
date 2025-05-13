import {animate, motion} from "framer-motion";

const startVariants = {
	offscreen: {
		opacity: 0,
		y: 200,
	},
	onscreen: {
		opacity: 1,
		y: 0,
		transition: {
			type: "tween",
			bounce: 0.4,
			duration: 0.5,
		},
	},
};

export function animateSection(Component) {
	return (
		<motion.section id="about" initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0}} variants={startVariants}>
			{Component()}
		</motion.section>
	);
}
