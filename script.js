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
const targets = document.querySelectorAll(".targets a");
const ball= document.getElementById('ball');
const tree= document.getElementById('tree');
const scale_tree= document.getElementById('scale-tree');
const scale_claus= document.getElementById('scale-claus');
const tree_target = document.getElementById('tree-target');
const claus_target = document.getElementById('claus-target');
const tree_range = document.getElementById('tree-range');
const claus_range = document.getElementById('claus-range');
const claus = document.getElementById('claus');
const presents_range = document.getElementById('presents-range');
const presents_target = document.getElementById('presents-target');
const scale_presents= document.getElementById('scale-presents');
const presents = document.querySelectorAll('.presents div')
const grinch = document.getElementById('grinch');
const elf = document.getElementById('elf');
const fire = document.getElementById('fire');
const candle_fire1 = document.getElementById('candle-fire1');
const candle_fire2 = document.getElementById('candle-fire2');
const candle_fire3 = document.getElementById('candle-fire3');
const sleigh= document.getElementById('sliegh');
const big_present= document.getElementById('big-present');
function StartGame(){
    title.style.animationName="end_title_anim";
    title.style.animationDelay="1s";

    info.style.display="none";
    
    sound_image.style.transform="translateX(-65px)"
    hint_image.style.transform="translateX(-65px)"
    targets_main.style.display="block";

    music.play()

    play.style.display="none";

    setTimeout(()=>{
        for(let i=0;i<targets.length;i++){
            targets[i].style.opacity="1";
            setTimeout( () =>{
                targets[i].style.opacity="0";
            },600)
        }
    },200)

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
    }else{
        window.alert("Twoja przeglądarka nie obsługuje trybu pełnoekranowego")
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
if (true) {
    tree_target.addEventListener("click", () => {
        scale_tree.style.transform = "translate(-50%, 80px)";
    });

    document.addEventListener("click", (event) => {
        if (!tree_target.contains(event.target)) {
            scale_tree.style.transform = "translate(-50%, 0px)";
        }
    });
}

if (true) {
    claus_target.addEventListener("click", () => {
        scale_claus.style.transform = "translate(-50%, 80px)";
    });

    document.addEventListener("click", (event) => {
        if (!claus_target.contains(event.target)) {
            scale_claus.style.transform = "translate(-50%, 0px)";
        }
    });
}
if (true) {
    presents_target.addEventListener("click", () => {
        scale_presents.style.transform = "translate(-50%, 80px)";
    });

    document.addEventListener("click", (event) => {
        if (!presents_target.contains(event.target)) {
            scale_presents.style.transform = "translate(-50%, 0px)";
        }
    });
}


function ShowPositions(){
    for(let i=0;i<targets.length;i++){
    targets[i].style.opacity="1";
    setTimeout( () =>{
        targets[i].style.opacity="0";
    },600)
}
}
function ChangeTreeSize(){
    let x = tree_range.value; 
    tree.style.height=x + "%";

}
function ChangeClausSize(){
    let y = claus_range.value; 
    claus.style.height=y + "%";

}
function AddPresent(){
    let x = presents_range.value;
    
    for (let i = 0; i < 6; i++) {
        presents[i].style.display="none";
     }
    
    for (let i = 0; i < x; i++) {
       presents[i].style.display="block";
    }
}

function BallClicked(){
    ball.style.transform="translateX(5%)";
    setTimeout(() =>{
        ball.style.transform="translateX(-5%)";
    },200);
    setTimeout(() =>{
        ball.style.transform="translateX(5%)";
    },400);
    setTimeout(() =>{
        ball.style.transform="translateX(-5%)";
    },600);
    setTimeout(() =>{
        ball.style.transform="translateX(5%)";
    },800);
    setTimeout(() =>{
        ball.style.transform="translateX(0%)";
    },1000);
};
function GrinchClicked(){
    grinch.style.opacity="1";
    setTimeout(() =>{
        grinch.style.opacity="0";
    },1000)
}

function ElfClicked(){
    setTimeout(() =>{
        elf.style.transform="translateY(0)";
    },100)
    setTimeout(() =>{
        elf.style.transform="translateY(15%)";
    },1200)
}
function FireClicked(){
    setTimeout(() =>{
        fire.style.opacity="1";
    },100)
    setTimeout(() =>{
        fire.style.opacity="0";
    },1200)
}
function CandleFireClicked1(){
    setTimeout(() =>{
        candle_fire1.style.opacity="1";
    },100)
}

function CandleFireClicked2(){
    setTimeout(() =>{
        candle_fire2.style.opacity="1";
    },100)
}

function CandleFireClicked3(){
    setTimeout(() =>{
        candle_fire3.style.opacity="1";
    },100)
}
function WindowClicked(){
    setTimeout(() =>{
        sleigh.style.transform="translate(-55%,15%)";
    },100)
}
function BigPresentClicked(){
    setTimeout(() =>{
        big_present.style.transform="rotate(10deg)";
    },200)
    setTimeout(() =>{
        big_present.style.transform="rotate(5deg)";
    },400)
    setTimeout(() =>{
        big_present.style.transform="rotate(10deg)";
    },700)
    setTimeout(() =>{
        big_present.style.transform="rotate(5deg)";
    },1000)
    setTimeout(() =>{
        big_present.style.transform="rotate(10deg)";
    },1200)
    setTimeout(() =>{
        big_present.style.transform="rotate(5deg)";
    },1400)
    setTimeout(() =>{
        big_present.style.transform="rotate(0deg)";
    },1450)
}