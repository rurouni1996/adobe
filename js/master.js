// let isMobile;

// if ($(window).width() <=480){
//     isMobile = true;
// } else {
//     isMobile = false
// }

const isMobile = $(window).width() <= 480;
const $grid = $('#Grid');




// function say (){
//     console.log('hello')
// }

// say()

// function say2(){
//     console.log('Good')
// }

// say2()

// function say3(){
//     console.log('Look')
// }

// say3()


function setGrid() {
    if (isMobile) {
        $grid.addClass('grid-2');
        return;
    }
    $grid.addClass('grid-3');
}

function setScroll() {
    if (!isMobile) return;
    const $nav = $('#Nav');
    $(window).scroll(function () {
        if ($(window).scrollTop() == 0) {
            $nav.removeClass('nav-active')
        } else {
            $nav.addClass('nav-active');
        }
    });
}



function setFancybox() {
    const $anchors = $grid.find('a');

    $anchors.fancybox({
        protect: true,
        loop: true,
        animationDuration: 1000,
        transitionDuration: 1000,
        transitionEffect: 'rotate',
        // fullScreen:{autoStart:true,},
        infobar: false,
        toolbar: true,
        smallBtn: false,
        arrows: true,
        // slideShow:{autoStart: true, speed:3000,}
        buttons: ['zoom', 'share', 'slideShow', 'fullScreen', 'download', 'thumbs', 'close',],
        media: {
            youtube: {
                params: {
                    autoplay:false,
                }
            }
        }
    })
};

function setInit(){
    setGrid()
}

function setEvent(){
    setScroll()
    setFancybox()
}

setInit()
setEvent()