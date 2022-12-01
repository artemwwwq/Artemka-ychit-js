// work this car 


car1.start();



// find elements
var showPrevBtn = document.getElementById('show-pref');
var showNextBtn = document.getElementById('show-next');
var slideImage = document.getElementById('slide-img');

// subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// create images array
var imageUrls = [];
imageUrls.push('https://cars.usnews.com/pics/size/300x225/images/Auto/izmo/i159614776/2022_chevrolet_corvette_stingray_angularfront.jpg');
imageUrls.push('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-chevrolet-camaro-zl1-1le-mmp-1-1639091299.jpg?crop=0.619xw:0.464xh;0.204xw,0.263xh&resize=480:*');
imageUrls.push('https://imageio.forbes.com/specials-images/imageserve/6064c6802c761b99a89d1f21/0x0.jpg?format=jpg&crop=2375,1336,x0,y120,safe&width=1200');
imageUrls.push('https://carsalesbase.com/wp-content/uploads/2020/07/US-sports-car-sales-Chevrolet_Corvette.jpg');

var currentImageIndex = 0;
slideImage.src = imageUrls[currentImageIndex]
showPrevBtn.disabled = true;



// function definitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imageUrls[currentImageIndex];
    showNextBtn.disabled = false;

    // disabled pref button if need
    if (currentImageIndex === 0 ) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imageUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    // disabled next button if need
    if (currentImageIndex === (imageUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}