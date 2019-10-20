 const menu = document.querySelector(".menu1");
 const navbar = document.querySelector("nav");
 const aa  = document.querySelectorAll("nav ul li a");
 menu.addEventListener("click", ()=> {
 	navbar.classList.toggle("buka");
 });
 	for (var i = 0;i< 5; i++) {
		 aa[i].addEventListener("click", ()=>{
 			navbar.classList.toggle("buka");
 		});
	 }



	 window.onscroll = function() {scrollFunction()};

	 function scrollFunction() {
	   if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
		 document.querySelector(".scroll").style.top = "0";
	   } else if (document.body.scrollTop < 70 || document.documentElement.scrollTop < 70){
		 document.querySelector(".scroll").style.top = "-80px";
	   }
	 }