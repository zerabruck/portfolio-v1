import React, {useEffect, useRef} from "react";

function random(min, max) {
	return min + Math.random() * (max - min + 1);
}

const Canvas = (props) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		var particlesOnScreen = 100;
		var particlesArray = [];
		const documentHeight = document.body.scrollHeight;
		var w, h;
		w = canvas.width = window.innerWidth;
		h = canvas.height = documentHeight;

		function clientResize(ev) {
			w = canvas.width = window.innerWidth;
			h = canvas.height = window.innerHeight;
		}
		window.addEventListener("resize", clientResize);

		function createSnowFlakes() {
			for (var i = 0; i < particlesOnScreen; i++) {
				particlesArray.push({
					x: Math.random() * w,
					y: Math.random() * h,
					opacity: Math.random(),
					speedX: random(-2, 2),
					speedY: random(2, 4),
					radius: random(0.5, 4.2),
				});
			}
		}

		function drawSnowFlakes() {
			ctx.strokeStyle = "orange";
			ctx.strokeRect(100, 547.5, 299.81817626953125, 58.79545593261719);

			for (var i = 0; i < particlesArray.length; i++) {
				var gradient = ctx.createRadialGradient(
					particlesArray[i].x,
					particlesArray[i].y,
					0,
					particlesArray[i].x,
					particlesArray[i].y,
					particlesArray[i].radius
				);

				gradient.addColorStop(0, "rgba(92,238,193," + particlesArray[i].opacity + ")"); // white
				gradient.addColorStop(0.8, "rgba(210, 236, 242," + particlesArray[i].opacity + ")"); // bluish
				gradient.addColorStop(1, "rgba(237, 247, 249," + particlesArray[i].opacity + ")"); // lighter bluish

				ctx.beginPath();
				ctx.arc(particlesArray[i].x, particlesArray[i].y, particlesArray[i].radius, 0, Math.PI * 2, false);

				ctx.fillStyle = gradient;
				ctx.fill();
			}
		}

		function moveSnowFlakes() {
			for (var i = 0; i < particlesArray.length; i++) {
				let sx = 100,
					ex = sx + 300,
					sy = 547;
				let x = particlesArray[i].x;
				let y = particlesArray[i].y;
				if (x >= sx && x <= ex && y >= sy - 2 && y <= sy + 2) {
					if (particlesArray[i].speedX > 0) {
						particlesArray[i].x += 1;
					} else particlesArray[i].x -= 1;

					if (particlesArray[i].x > ex) {
						particlesArray[i].speedX = 1;
						// particlesArray[i].speedY = 2;
					} else if (particlesArray[i].x < sx) {
						particlesArray[i].speedX = -1;
						// particlesArray[i].speedY = 2;
					}
					continue;
				}
				particlesArray[i].x += particlesArray[i].speedX;
				particlesArray[i].y += particlesArray[i].speedY;

				// if the particle hits left wall, send it to the right
				if (particlesArray[i].x < 0) {
					particlesArray[i].x = w;
				}

				// if the particle hits right wall, send it to the left
				if (particlesArray[i].x > w) {
					particlesArray[i].x = 0;
				}

				if (particlesArray[i].y > h) {
					particlesArray[i].x = Math.random() * w * 1.5;
					particlesArray[i].y = -50;
				}
			}
		}

		function updateSnowFall() {
			ctx.clearRect(0, 0, w, h);
			drawSnowFlakes();
			moveSnowFlakes();
		}

		const interval = setInterval(updateSnowFall, 25);
		createSnowFlakes();

		// function addParticle(e) {
		// 	// get cursor position
		// 	var cursorX = e.clientX;
		// 	var cursorY = e.clientY;
		// 	particlesArray.push({
		// 		x: cursorX,
		// 		y: cursorY,
		// 		opacity: Math.random(),
		// 		speedX: random(-2, 2),
		// 		speedY: random(2, 4),
		// 		radius: random(0.5, 4.2),
		// 	});
		// }

		// window.addEventListener("click", addParticle);

		return () => {
			clearInterval(interval);
			window.removeEventListener("resize", clientResize);
			// window.removeEventListener("click", addParticle);
		};
	}, []);

	return <canvas ref={canvasRef} {...props} className="absolute top-0 left-0 w-full -z-10" />;
};

export default Canvas;
