let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/everything?q=apple&from=2019-06-16&to=2019-06-16&sortBy=popularity&apiKey=83de0928cd2f4e7ca1fde83f2d98cc5b', false);

xhr.send();

if (xhr.status != 200) {

  alert( xhr.status + ': ' + xhr.statusText ); 
} else {

  x = JSON.parse (xhr.responseText) ; 
  y = x.articles;
    for(i = 0; i < y.length; i++){
   // console.log(y[0]); 
    
    block.innerHTML = y[i].author;
  console.log(y[i].author);
  }   
  let block1 = document.getElementById('block');
    block.innerHTML = x.articles[i].description;
  
    document.body.appendChild(block)
}