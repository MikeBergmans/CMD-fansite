const javashit = document.querySelector("#javashit");
javashit.style.color = 'red';
let bigbitch = document.querySelector("#bigbitch");

let bitchclick = true;

bigbitch.addEventListener("click", colorama);

const test = document.getElementsByClassName("booty");

function colorama() {
    if (bitchclick) {
        bigbitch.style.backgroundColor = "red";
        bitchclick = false;
        document.body.style.backgroundColor = 'red';
        document.body.style.backgroundImage = "url('images/red.png')";

        document.getElementById('bannerpic').innerHTML = '<img src="images/spooky.jpeg">';

        document.getElementById("infotext").style.color = "#ffffff";
        document.getElementById("infotext").style.fontWeight = "bold"
        document.getElementById("infotext").innerHTML = "YOU FOOL. YOU CLICKED THE BUTTON. WE HAVE FOOLED YOU!!!! THE BUTTON WAS NOT IN FACT FRIENDLY, BUT <em>EEEVIIILLLLLLL!!!!!!!1!1!</em>MUAHAHAHA<br>HAHAHAHAHAHAHAHAHAHAHA<br>HAHAHAHAHAHAHAHAHAHAHA<br>HAHAHAHAHAHAHAHAHAHAHA<br>HAHAHAHAHAHAHAHAHAHAHA<br>HAHAHAHAHAHAHAHAHAHAHA<br>HAHAHAHAHAHAHAHAHAHAHA<br>HAHAHAHAHAHAHAHAHAHAHA<br>HAAAAAAAAAAAAAAAAAAAAAA";

        document.getElementById("bigbitch").innerHTML = 'EVIL BUTTON';
        bigbitch.style.color = "darkred";

        document.getElementById("contact").innerHTML = '<a href="https://thatsthefinger.com" class="bottomlink">DANGER DANGER DANGER</a> <br> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="bottomlink">NONONONO DO NOT PRESS</a>'

        document.getElementById("title").innerHTML = '<h1>ODILE TAKES OVER</h1>';
        document.getElementById("title").style.color = 'red';

        document.querySelector(".booty1").style.borderColor = "black";
        document.querySelector(".booty2").style.borderColor = "black";
        document.querySelector(".booty3").style.borderColor = "black";
        document.querySelector(".booty4").style.borderColor = "black";
        document.querySelector(".booty5").style.borderColor = "black";

        document.querySelector(".booty1").style.backgroundImage = "url('images/image.png')";
        document.querySelector(".booty2").style.backgroundImage = "url('images/image.png')";
        document.querySelector(".booty3").style.backgroundImage = "url('images/image.png')";
        document.querySelector(".booty4").style.backgroundImage = "url('images/image.png')";
        document.querySelector(".booty5").style.backgroundImage = "url('images/image.png')";
      
    } else {
        bigbitch.style.backgroundColor = "lightgrey";
        bitchclick = true;
        document.body.style.backgroundColor = 'darkgrey';
        document.body.style.backgroundImage = "url('images/unpleasant gradient.png')";

        document.getElementById('bannerpic').innerHTML = '<img src="images/odette.png">';

        document.getElementById("infotext").style.color = "blanchedalmond";
        document.getElementById("infotext").style.fontWeight = "normal";
        document.getElementById("infotext").innerHTML ='Odette Spessiva is a playable <em class="element">Cryo</em> character in Genshin Impact. <br> She is the Prima Ballerina of the Korolevskiy Troupe, known for her frosty elegance on stage. <br> She is also a member of the Fatui and is currently the favored candidate to inherit the Harbinger seat of her mentor, Signora.<br>';
     
        document.getElementById("bigbitch").innerHTML = 'friendly button';
        bigbitch.style.color = "black";
   
        document.getElementById("contact").innerHTML = '<a href="https://longdogechallenge.com" class="bottomlink">oooo hyperlink wowww </a> <br> <a href="https://alwaysjudgeabookbyitscover.com" class="bottomlink">some nice literature </a>'

        document.getElementById("title").innerHTML = '<h1>i love odette genshin impact</h1>';
        document.getElementById("title").style.color = '#99ffff';

        document.querySelector(".booty1").style.borderColor = "#d4ff60";
        document.querySelector(".booty2").style.borderColor = "#d4ff60";
        document.querySelector(".booty3").style.borderColor = "#d4ff60";
        document.querySelector(".booty4").style.borderColor = "#d4ff60";
        document.querySelector(".booty5").style.borderColor = "#d4ff60";

        document.querySelector(".booty1").style.background = "linear-gradient( #707070, #303030)";
        document.querySelector(".booty2").style.background = "linear-gradient( #707070, #303030)";
        document.querySelector(".booty3").style.background = "linear-gradient( #707070, #303030)";
        document.querySelector(".booty4").style.background = "linear-gradient( #707070, #303030)";
        document.querySelector(".booty5").style.background = "linear-gradient( #707070, #303030)";
    }
}

