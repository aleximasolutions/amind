// let AllLinks = document.querySelectorAll("a");

// AllLinks.forEach(element => {
    
//     element.addEventListener('click', function(a) { 
//         a.preventDefault();
//         console.log(a);
//     });
// });



let scrollBtns = document.querySelectorAll('.navigate__links');
let navHeigth = document.querySelector('.navigate').clientHeight + 10;
console.log(navHeigth);

scrollBtns.forEach( e => {
    let scrollPosition;
    let idBlock;
    e.addEventListener('click', function() {
        e.preventDefault;
        idBlock = this.dataset.scrollto == null ? '.header': `#${String(this.dataset.scrollto)}`;   
        scrollPosition = document.querySelector(idBlock).offsetTop - navHeigth;
        
        window.scrollTo ({
            top: scrollPosition,
            left:0,
            behavior:"smooth"
        });
    });
});