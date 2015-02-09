/*Adrian Viñuelas Pereda*/
function cambiarColor(){
	el = document.getElementById("form1");
	el.addEventListener("input",function(e){
		elcolor = document.getElementById("colores");
		elcolor.style.background = el.value;
	});
};

