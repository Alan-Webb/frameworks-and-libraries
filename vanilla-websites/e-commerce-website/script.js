// JS representation from DOM
const wrapper = document.querySelector(".slider-wrapper");
const menuItemns = document.querySelectorAll(".menu-item");

menuItemns.forEach((item, index) => {
	item.addEventListener("click", () => {
		console.log("clicky boi");
	});
});
