//#region 1- Typing Effect + Button Visability

var myText = `A proud student, a graduate or just a University supporter? And you have already bought that cool hoodie. What about adding some original clothing items designed by our students to your collection? Go to our official showroom be.utb.cz`;
i =0 ;
//when the content of the page load 
document.addEventListener('DOMContentLoaded',function(){

'use strict';
var typeWriter = setInterval(function(){
    document.getElementById('descriptionShop').textContent += myText[i];
    i+=1;
    if(i > myText.length -1) {
        //make button visit website visiable 
        document.getElementById('buttonVisit').style.display ="block";
        clearInterval(typeWriter);
    }

},30)



},false)



//#endregion 

//#region 2- Open basket on clicking 
var basketButton = document.querySelector('.basket');
var dropDownBasketContent = document.querySelector('.dropDownBasketContent');


basketButton.addEventListener('click',function() {
    if(dropDownBasketContent.style.display === "none") {
        dropDownBasketContent.style.display = "flex";
        return ;
    }
    dropDownBasketContent.style.display ="none";
});


//#endregion 