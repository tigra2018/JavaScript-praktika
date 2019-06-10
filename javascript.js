
i = 0;
let images = ["img/52553778_2239802329411753_1615837192981541835_n.jpg", "img/53086310_309860299674285_6230656625640732532_n.jpg", "img/53238347_378266366340523_1975914855758364120_n.jpg", "img/photo_2019-02-04_22-28-37.jpg", "img/photo_2019-02-12_19-13-15.jpg"];

let left = document.getElementById('left');
let right = document.getElementById('right');

right.addEventListener("click", function zamenaPhoto(){

let photo = document.getElementById('photo');

photo.src = images[i+1];
i++;
if (i>=4){
	i = 0;
}
});

left.addEventListener("click", function zamenaPhoto(){

let photo = document.getElementById('photo');

photo.src = images[i+1];
i++;
if (i>=4){
	i = 0;
}
});