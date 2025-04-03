const sliderpack = document.querySelectorAll(".slide");
let currentslide = 0;

function showsliderpack(index) {
    sliderpack.forEach((slider, i) => {
        slider.style.display = i ===index ? 'block':'none';
    });
}

showsliderpack(0);

setInterval(()=> {
    currentslide = (currentslide + 1) % sliderpack.length;
    showsliderpack(currentslide);
}, 2000)



const testimonials = document.querySelectorAll('.bor');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ?'block' : 'none';
    });
}


showTestimonial(0);

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 2000);

