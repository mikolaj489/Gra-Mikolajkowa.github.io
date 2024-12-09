const mainElement = document.getElementById("main");
const fullscreen = document.getElementById("fullscreen");
const smallscreen = document.getElementById("smallscreen");
const music = document.getElementById("backgroundMusic");
const title = document.getElementById("title");
const info = document.getElementById("info");
const sound_image = document.querySelector('.sound-image');
const sound_control = document.getElementById("sound-control");
const volumeControl = document.getElementById('volumeControl');
const hint_image = document.querySelector('.hint-image');
const hint = document.getElementById("hint");
const targets_main = document.querySelector(".targets");
const play = document.getElementById("play");

function StartGame(){
    fullscreen.style.display = "none";
    smallscreen.style.display = "block";

    title.style.animationName="end_title_anim";
    title.style.animationDelay="1s";

    info.style.display="none";
    
    sound_image.style.transform="translateX(-65px)"
    hint_image.style.transform="translateX(-65px)"
    targets_main.style.display="block";

    music.play()

    play.style.display="none";
}

music.volume = volumeControl.value;

volumeControl.addEventListener('input', () => {
    music.volume = volumeControl.value;
});

function FullScreen() {
    if (mainElement.requestFullscreen) {
        mainElement.requestFullscreen();
    } else if (mainElement.mozRequestFullScreen) {
        mainElement.mozRequestFullScreen();
    } else if (mainElement.webkitRequestFullscreen) {
        mainElement.webkitRequestFullscreen();
    } else if (mainElement.msRequestFullscreen) {
        mainElement.msRequestFullscreen();
    }

    fullscreen.style.display = "none";
    smallscreen.style.display = "block";

}
function SmallScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

    fullscreen.style.display = "block";
    smallscreen.style.display = "none";

}

sound_image.addEventListener("mouseover", () =>{
    sound_control.style.transform="translateX(-240px)";
});
sound_image.addEventListener("mouseout", () =>{
    sound_control.style.transform="translateX(0px)";
});
sound_control.addEventListener("mouseover", () =>{
    sound_control.style.transform="translateX(-240px)";
});
sound_control.addEventListener("mouseout", () =>{
    sound_control.style.transform="translateX(0px)";
});


hint_image.addEventListener("mouseover", () =>{
    hint.style.transform="translateX(-240px)";
});
hint_image.addEventListener("mouseout", () =>{
    hint.style.transform="translateX(0px)";
});






//targets
const targets = document.querySelector(".targets a");

function ShowPositions(){
    targets.style.opacity="1";
    setTimeout( () =>{
        targets.style.opacity="0";
    },600)
}

const ball= document.getElementById('ball');

function BallClicked(){
    ball.style.transform="translateX(5%)"
    setTimeout(() =>{
           ball.style.transform="translateX(-5%)"
    },200);
    setTimeout(() =>{
        ball.style.transform="translateX(5%)"
    },400);
    setTimeout(() =>{
        ball.style.transform="translateX(-5%)"
    },600);
    setTimeout(() =>{
        ball.style.transform="translateX(5%)"
    },800);
    setTimeout(() =>{
        ball.style.transform="translateX(0%)"
    },1000);
};