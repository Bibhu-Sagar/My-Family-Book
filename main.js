var reasons = [
    "Dipak Kumar Dalei",
    "Padmini Dalei",
    "Sradha Sagarika",
    "Bibhu Sagar(Me)"
];
var image = [
    "https://i.pinimg.com/originals/9f/d8/76/9fd876a80fce4e05e2293a54e4504ab1.png",
    "https://e7.pngegg.com/pngimages/793/602/png-clipart-online-labels-inc-housewife-home-home-child-hand.png",
    "https://webstockreview.net/images/clipart-student-highschool-4.jpg",
    "https://img.pngio.com/boy-cartoon-child-clip-art-hat-boy-png-download-378800-free-boy-cartoon-png-900_800.jpg"
];
var k = 0;
function nextimage() {
    document.getElementById("image_text").innerHTML=reasons[k];

    document.getElementById("album").src=image[k];
    k++;
    document.getElementById("audio").play();

}