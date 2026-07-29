const btn = document.getElementById("openBtn");

createHearts();

btn.onclick = function () {

    btn.innerHTML = "❤️ Loading Surprise...";

    setTimeout(function () {

        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("birthdayScene").style.display = "flex";

    }, 2500);

};

function createHearts() {

    setInterval(function () {

        let heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (20 + Math.random() * 30) + "px";

        heart.style.animationDuration = (4 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);

    }, 250);

}
/* ======================
      PART 2C
====================== */

// Show Blow Button after candles light

setTimeout(() => {

let blowBtn = document.getElementById("blowBtn");

if(blowBtn){
    blowBtn.style.display = "block";
}

}, 3200);


// Blow Candles Click

const blowBtn = document.getElementById("blowBtn");

if(blowBtn){

blowBtn.addEventListener("click", () => {

    // Turn off flames

    document.getElementById("f1")?.classList.remove("show");
    document.getElementById("f2")?.classList.remove("show");
    document.getElementById("f3")?.classList.remove("show");

    // Smoke

    for(let i=0;i<12;i++){

        let smoke=document.createElement("div");

        smoke.className="smoke";

        smoke.innerHTML="☁️";

        smoke.style.left=(45+Math.random()*10)+"vw";

        smoke.style.top="35vh";

        document.body.appendChild(smoke);

        setTimeout(()=>{
            smoke.remove();
        },3000);
    }

    // Balloons

    for(let i=0;i<20;i++){

        let balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.innerHTML=
        ["🎈","🎈","🎈","🎉"][Math.floor(Math.random()*4)];

        balloon.style.left=
        Math.random()*100+"vw";

        balloon.style.animationDuration=
        (5+Math.random()*4)+"s";

        document.body.appendChild(balloon);

        setTimeout(()=>{
            balloon.remove();
        },9000);

    }

    blowBtn.innerHTML = "🎉 Make a Wish!";
    blowBtn.disabled = true;

});

}
/* ==========================
        PART 3A
========================== */

const giftContainer=document.getElementById("giftContainer");
const giftBox=document.getElementById("giftBox");
const heartGift=document.getElementById("heartGift");


// Show gift after blowing candles

if(blowBtn){

blowBtn.addEventListener("click",()=>{

setTimeout(()=>{

giftContainer.style.display="flex";

},2500);

});

}


// Gift Click

giftBox.addEventListener("click",()=>{

giftBox.innerHTML="🎊";

heartGift.style.opacity="1";

heartGift.style.animation="heartPop 1s forwards";


// Flowers

for(let i=0;i<25;i++){

let flower=document.createElement("div");

flower.className="flower";

flower.innerHTML=["🌸","🌹","🌺"][Math.floor(Math.random()*3)];

flower.style.left=Math.random()*100+"vw";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},6000);

}


// Stars

for(let i=0;i<30;i++){

let star=document.createElement("div");

star.className="star";

star.innerHTML="⭐";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

document.body.appendChild(star);

}

});
/* ==========================
        PART 3B
========================== */

const message =
`Dear Kamya 💖

You are not just my sister,
you are my best friend, my biggest support,
and one of the most precious people in my life.

May your smile always shine brighter than the stars ✨,
may every dream come true 🌸,
and may this year bring you endless happiness.

Happy Birthday, Kamya! 🎂💗`;

const messageBox = document.getElementById("messageBox");
const typewriter = document.getElementById("typewriter");

giftBox.addEventListener("click", () => {

    setTimeout(() => {

        messageBox.style.display = "block";

        let i = 0;

        function type(){

            if(i < message.length){

                typewriter.innerHTML += message.charAt(i);

                i++;

                setTimeout(type,40);

            }

        }

        type();

    },1200);

});
/* ==========================
        PART 4A
========================== */

const finalScreen = document.getElementById("finalScreen");

giftBox.addEventListener("click",()=>{

setTimeout(()=>{

finalScreen.style.display="block";

for(let i=0;i<40;i++){

let fw=document.createElement("div");

fw.className="firework";

fw.innerHTML=
["🎆","✨","💖","🎇","🎊"][Math.floor(Math.random()*5)];

fw.style.left=Math.random()*100+"vw";

fw.style.top=Math.random()*80+"vh";

document.body.appendChild(fw);

setTimeout(()=>{
fw.remove();
},2000);

}

},9000);

});
/* ===== Part 4B ===== */

// Falling Roses

setInterval(()=>{

let rose=document.createElement("div");

rose.className="rose";

rose.innerHTML=
["🌹","🌸","💮"][Math.floor(Math.random()*3)];

rose.style.left=
Math.random()*100+"vw";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},7000);

},500);
/* ===== Part 5A ===== */

const music = document.getElementById("birthdayMusic");
const replayBtn = document.getElementById("replayBtn");

// Play music when final screen appears
setTimeout(()=>{

if(music){

music.play().catch(()=>{});

}

},10000);

// Floating hearts

setInterval(()=>{

let h=document.createElement("div");

h.className="floatingHeart";

h.innerHTML=Math.random()>0.5?"💖":"❤️";

h.style.left=Math.random()*100+"vw";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},5000);

},400);


// Replay Button

if(replayBtn){

replayBtn.addEventListener("click",()=>{

location.reload();

});

}
