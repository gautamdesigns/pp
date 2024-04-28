/*Default Coding*/
let searchBox = document.querySelector(".search-box");
document.querySelector("#search-btn").onclick = () => {
	searchBox.classList.toggle("active");
	shoppingCart.classList.remove("active");
	signIn.classList.remove("active");
	menu.classList.remove("active");
};
let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-btn").onclick = () => {
	shoppingCart.classList.toggle("active");
	searchBox.classList.remove("active");
	signIn.classList.remove("active");
	menu.classList.remove("active");
};
let signIn = document.querySelector(".sign-in");
document.querySelector("#profile-btn").onclick = () => {
	signIn.classList.toggle("active");
	searchBox.classList.remove("active");
	shoppingCart.classList.remove("active");
	menu.classList.remove("active");
};
let menu = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
	menu.classList.toggle("active");
	searchBox.classList.remove("active");
	shoppingCart.classList.remove("active");
	signIn.classList.remove("active");
};
window.onscroll = () => {
	searchBox.classList.remove("active");
	shoppingCart.classList.remove("active");
	signIn.classList.remove("active");
	menu.classList.remove("active");
};
/*PopUp Coding*/
const toggleModal = () => {
	const bodyClassList = document.body.classList;
	if (bodyClassList.contains("open")) {
		bodyClassList.remove("open");
		bodyClassList.add("closed");
	} else {
		bodyClassList.remove("closed");
		bodyClassList.add("open");
	}
};
/*BactToTop Coding*/
document.addEventListener("DOMContentLoaded", function () {
	const backtotop = document.getElementById("back-to-top-btn");

	window.addEventListener("scroll", function () {
		if (window.scrollY > 300) {
			backtotop.style.display = "block";
		} else {
			backtotop.style.display = "none";
		}
	});

	backtotop.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});
});
