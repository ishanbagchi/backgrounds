document.body.innerHTML = "<div class='bg'></div><div class='bg'></div><div class='bg'></div><div class='bg'></div><div class='bg'></div><div class='bg'></div><div class='bg'></div><div class='bg'></div>" + document.body.innerHTML;

// Get HTML head element 
var head = document.getElementsByTagName('HEAD')[0];  

// Create new link Element 
var link = document.createElement('link'); 

// set the attributes for link element  
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'https://ishanbagchi.github.io/backgrounds/css/fireflies.css';  

// Append link element to HTML head 
head.appendChild(link);  