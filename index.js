const search=document.querySelector("#finder");
console.log(search)
const movie=document.querySelectorAll(".film");

search.addEventListener('keyup', function(event) {
    const word=event.target.value.toLowerCase();
movie.forEach(item => {
    item.querySelector('p').textContent.toLowerCase().includes(word)? (item.style.display='block') : (item.style.display='none');
})  
})
