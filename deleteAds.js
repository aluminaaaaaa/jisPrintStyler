const ptr = setInterval(1000, () => {
	const insTags = document.querySelectorAll('ins');
	for(let i = 0; i < insTags.length; i++){
		insTags[i].style.display = "none";
	}
});