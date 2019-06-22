let spisok = document.querySelectorAll('.menu-3');

for (var i = 0; i < spisok.length; i++) {
	spisok[i].style.display = 'none';
}

let zagolov = document.querySelectorAll('h2');
for (var i = 0; i < zagolov.length; i++) {
	zagolov[i].addEventListener('click', function(g) {
		let li = g.target.parentElement;
      div = li.querySelector('div');

      let spisok = document.querySelectorAll('.menu-3');

for (var i = 0; i < spisok.length; i++) {
	spisok[i].style.display = 'none';
}
      
      div.style.display = 'block';
	});
}