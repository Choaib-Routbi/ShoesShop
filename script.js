var sections = document.querySelectorAll(".sections")
sections[1].style.backgroundColor="rgba(240, 248, 255, 0.057)"
sections[3].style.backgroundColor="rgba(240, 248, 255, 0.057)"

// add in cart button 

// localStorage.setItem("incartcount","5")
// var incartcount = localStorage.getItem("incartcount")

// var toCartCount = document.getElementById("onCartCount")
// toCartCount.innerText=0
// var toCart = document.querySelectorAll(".toCart")

// for (let i = 0; i < toCart.length; ) {
//     toCart[i].addEventListener('click',()=>{
//         toCartCount.innerText++
//         toCart[i].style.opacity="0.5"
//         toCart[i].style.backgroundColor="transparent"
//         toCart[i].style.border="5px solid var(--orange)"

//     })
    
// }
// show more button 

var showMore = document.querySelectorAll(".showMore")
for (let i = 0; i < showMore.length; i++) {
    showMore[i].addEventListener('click',()=>{
        
           showMore[i].style.backgroundColor="transparent"
           showMore[i].style.border="5px solid var(--orange)"
  
           
    })
    
}
