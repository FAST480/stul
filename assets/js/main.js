// const preloader = document.querySelector(".preloader");

// preloader.addEventListener("click", ()=>{

// 	preloader.classList.add("done");

// });



document.body.onload = () => {
	setTimeout(()=>{
		const preloader = document.querySelector(".preloader");
		if(!preloader.classList.contains("done"))
		{
			preloader.classList.add("done");
		}
	}, 2500);
}