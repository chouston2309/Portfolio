//Mobile Menu Toggle BROKEN NEEDS FIXING!!!
const hamburger = document.getElementById('hamburger');
const headerWrapper = document.querySelector('.header-wrapper');
const header = document.querySelector('header');
const homeTab = document.getElementById('homeTab');
const homeIconTab = document.getElementById('homeIconTab');

hamburger.addEventListener('click', function(){
    headerWrapper.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});


//Image Zoom
/*const imgHolder = document.getElementById('imgHolder');
const imgs = document.querySelectorAll('main img');
const main = document.querySelector('main');
const imgReuse = document.querySelector('#imgHolder img');

main.addEventListener('click', function(e){
    if(e.target && e.target.nodeName === 'IMG' && e.target.id === 'xBtn'){
        var clickedImg = e.target;
        console.log(clickedImg);
        document.body.style.overflow = 'hidden';
        loadImg(clickedImg);
    }
})

function loadImg(image){
    var imgSrc = image.src;
    var imgAlt = image.alt;
    imgReuse.src = imgSrc;
    imgReuse.alt = imgAlt;
}*/

//Lottie Animations
//containers
const htmlContainer = document.getElementById('htmlContainer');
const cssContainer = document.getElementById('cssContainer');
const jsContainer = document.getElementById('jsContainer');
const vueContainer = document.getElementById('vueContainer');
const bsContainer = document.getElementById('bsContainer');
const psContainer = document.getElementById('psContainer');
const aiContainer = document.getElementById('aiContainer');
const aeContainer = document.getElementById('aeContainer');

//factory function
function lottieFactory(containerId, pathName, halfwayFrame, segmentArr, lottieContainer){
    var animation = lottie.loadAnimation({
        container: document.getElementById(containerId),
        renderer:'svg',
        loop: false,
        path: `images/lottie/${pathName}`
    });
    
    animation.play();
    animation.addEventListener('enterFrame', function() {
        if (animation.currentFrame >= halfwayFrame) {
            animation.pause();
        }
    });

    if(lottieContainer) {

        const playAnimation = () => {
            animation.playSegments(segmentArr, true);
        };

        const reverseAnimation = () => {
            animation.setDirection(-1);
            animation.play();
        };

        // Mouse events
        lottieContainer.addEventListener('mouseenter', playAnimation);
        lottieContainer.addEventListener('mouseleave', reverseAnimation);

        // Touch events
        lottieContainer.addEventListener('touchstart', playAnimation);
        lottieContainer.addEventListener('touchend', reverseAnimation);
    }
}

//create lotties
const homePage = document.querySelector('div.main-about');

if(homePage) {
    lottieFactory('htmlContainer', 'icon-html.json', 67, [68,101], htmlContainer);
    lottieFactory('cssContainer', 'icon-css.json', 67, [68,101], cssContainer);
    lottieFactory('jsContainer', 'icon-js.json', 67, [68,101], jsContainer);
    lottieFactory('vueContainer', 'icon-vue.json', 39, [40,55], vueContainer);
    lottieFactory('bsContainer', 'Stamp_bootstrap-icon.json', 35, [36,68], bsContainer);
    lottieFactory('psContainer', 'ps-P_icon-ps.json', 26, [27,59], psContainer);
    lottieFactory('aiContainer', 'ai-P_icon-ps.json', 26, [27,59], aiContainer);
    lottieFactory('aeContainer', 'ae-P_icon-ps.json', 26, [27,59], aeContainer);
}