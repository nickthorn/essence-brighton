const contactBtn = document.getElementById("contact-btn");
const contact = document.getElementById("contact");
const closeBtn = document.getElementById("close-btn");
const landing = document.getElementById("landing");

const closeContact = () => {
	contact.style.right = window.innerWidth <= 1000 ? "-100vw" : "-40vw";
};

document.addEventListener("click", () => {
	closeContact();
});
contact.addEventListener("click", (e) => {
	e.stopPropagation();
});
contactBtn.addEventListener("click", (e) => {
	e.preventDefault();
	e.stopPropagation();
	contact.style.right = "0";
});
closeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	e.stopPropagation();
	closeContact();
});
