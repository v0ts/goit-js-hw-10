const options = { 
	rootMargin: '100px',
	threshold: 0.5,
}

const observer = new IntersectionObserver(observerImages, options);

const imagesArr = document.querySelectorAll("img[data-src]");

function observerImages(entries) {
	entries.forEach(e => {
		if (e.isIntersecting) {
			let elem = e.target; 
			
			elem.src = elem.dataset.src
			observer.unobserve(e);
		}
	});
}

imagesArr.forEach((imageEl) => { 
	observer.observe(imageEl); 
})