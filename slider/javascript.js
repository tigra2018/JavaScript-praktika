i = 0;

let images = ["https://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg",
"https://avatars.mds.yandex.net/get-pdb/195449/dd8d7db7-9d1c-4d3f-899d-1463a82f3887/s1200",
"http://popugai-market.ru/images/8/8807.jpg",
"http://www.goldenline.org/kittens/dream5.jpg"];

let left = document.getElementById('left');

let right = document.getElementById('right');

let photo = document.getElementById('photo');

photo.src = images[i];

right.addEventListener("click", function zamenaPhoto1(){

	if (i === images.length -1){

		i = -1;
	}

	i++;

	photo.src = images[i];

});

left.addEventListener("click", function zamenaPhoto2(){

	if (i === 0){

		i = images.length;
	}

	i--;

	photo.src = images[i];

});