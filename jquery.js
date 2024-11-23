$(document).ready(function () {
    const slide = [
        "https://cdn.onekindesign.com/wp-content/uploads/2023/10/Modern-Luxury-Home-Minnesota-Swanson-Homes-00-1-Kindesign.jpg",
        "https://i.pinimg.com/originals/d8/ac/2b/d8ac2bcbe49dff150c55e9915abb7543.jpg",
        "https://img.freepik.com/premium-photo/house-with-lot-windows-view-sunset_1103290-79997.jpg",
        "https://st.hzcdn.com/simgs/pictures/exteriors/beautiful-modern-southern-farmhouse-by-steve-powell-homes-david-cannon-photography-img~9241626f0a621ff6_4-2069-1-e19b645.jpg",
        "https://fancyhouse-design.com/wp-content/uploads/2024/04/Modern-home-design-embraces-clean-lines-and-clutter-free-living-creating-serene-environments.jpg"
     
    ];
    
    let currentSlide = 0;

    function slideShow(index) {
        $("#slide").attr("src", slide[index]);
        $("#container img").removeClass("active");
        $(`#container img[data-index=${index}]`).addClass("active");
    }

    // sonraki slayda keç
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slide.length;
        slideShow(currentSlide);
    }

    // evvelki slayda keç
    function beforeSlide() {
        currentSlide = (currentSlide === 0) ? slide.length - 1 : currentSlide - 1;
        slideShow(currentSlide);
    }

    $("#next").click(function () {
        nextSlide();
    });

    $("#before").click(function () {
        beforeSlide();
    });

    slide.forEach((imgSrc, index) => {
        const thumbnail = $(`<img src="${imgSrc}" data-index="${index}" class="thumbnail">`);
        $("#container").append(thumbnail);

        thumbnail.click(function () {
            currentSlide = index;
            slideShow(currentSlide);
        });
    });

    // İlk slaydi goster
    slideShow(currentSlide);
});
