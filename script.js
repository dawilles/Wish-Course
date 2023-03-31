const card1 = document.querySelector("#card-one");
const stars1 = card1.querySelectorAll(".stars i");

stars1.forEach((star, index1) => {
	star.addEventListener("click", () => {
		console.log(index1);
		stars1.forEach((star, index2) => {
			index1 >= index2
				? star.classList.add("active")
				: star.classList.remove("active");
		});
	});
});

const card2 = document.querySelector("#card-two");
const stars2 = card2.querySelectorAll(".stars i");

stars2.forEach((star, index1) => {
	star.addEventListener("click", () => {
		console.log(index1);
		stars2.forEach((star, index2) => {
			index1 >= index2
				? star.classList.add("active")
				: star.classList.remove("active");
		});
	});
});