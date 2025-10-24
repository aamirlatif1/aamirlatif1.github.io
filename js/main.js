let arrow = document.getElementById("top-arrow");

window.addEventListener('scroll', function(){ console.log(arrow.style.top=window.pageYOffset); }, true)
