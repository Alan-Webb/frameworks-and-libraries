// Navbar scroll effect
function userScroll() {
	const navbar = document.querySelector(".navbar");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			navbar.classList.add("bg-dark");
			navbar.classList.add("navbar-sticky");
		} else {
			navbar.classList.remove("bg-dark");
			navbar.classList.remove("navbar-sticky");
		}
	});
}

// Stats counter effect
function incrementStats() {
	const counters = document.querySelectorAll(".counter");

	counters.forEach((counter) => {
		counter.innerText = 0;

		const updateCounter = () => {
			const target = +counter.getAttribute("data-bs-target");
			const c = +counter.innerText;

			const increment = target / 200;

			if (c < target) {
				counter.innerText = Math.ceil(c + increment);
				setTimeout(updateCounter, 1);
			} else {
				counter.innerText = target;
			}
		};

		updateCounter();
	});
}

document.addEventListener("DOMContentLoaded", userScroll);
document.addEventListener("DOMContentLoaded", incrementStats);
