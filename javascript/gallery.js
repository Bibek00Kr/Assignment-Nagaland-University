// let slideIndex = [1, 1, 1, 1];
// let slideId = ["sports-week", "cultural-day", "freshers-day", "farewell"];
// showSlides(1, 0);
// showSlides(1, 1);
// showSlides(1, 2);
// showSlides(1, 3);

// function plusSlides(n, no) {
//     showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//     let i;
//     let x = document.getElementsByClassName(slideId[no]);
//     if (n > x.length) {slideIndex[no] = 1}
//     if (n < 1) {slideIndex[no] = x.length}
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex[no] - 1].style.display = "block";
// }
let slideIndex = [1, 1, 1, 1];
let slideId = ["sports-week", "cultural-day", "freshers-day", "farewell"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let slides = document.getElementsByClassName(slideId[no]);
    if (n > slides.length) {
        slideIndex[no] = 1;
    }
    if (n < 1) {
        slideIndex[no] = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "slide";
    }
    slides[slideIndex[no] - 1].style.display = "block";
}
