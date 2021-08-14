const elements = document.getElementsByClassName('heading');

for (element of elements){
    element.style.color = 'lightblue';
}


const backPack = document.getElementById ('backpack');
backPack.style.backgroundColor = 'tomato';


const cards = document.getElementsByClassName('card');

for (element of cards){
    element.style.borderRadius = '30px';
}

// button-1
function orderNow(){
    const orderbutton = document.getElementById('just-click');
    orderbutton.innerText = 'Thanks for Your Order.'
}

// button-2
function orderNowTwo(){
    const orderbutton = document.getElementById('just-click-2');
    orderbutton.innerText = 'Thanks for Your Order.'
}
// button-3
function orderNowThree(){
    const orderbutton = document.getElementById('just-click-3');
    orderbutton.innerText = 'Thanks for Your Order.'
}
// button-4
function orderNowFour(){
    const orderbutton = document.getElementById('just-click-4');
    orderbutton.innerText = 'Thanks for Your Order.'
}
// button-5
function orderNowFive(){
    const orderbutton = document.getElementById('just-click-5');
    orderbutton.innerText = 'Thanks for Your Order.'
}
// button-6
function orderNowSix(){
    const orderbutton = document.getElementById('just-click-6');
    orderbutton.innerText = 'Thanks for Your Order.'
}

// comment-button
document.getElementById('submit-comment').addEventListener('click', function(){
    const commentBox = document.getElementById('new-comment');
    const userComment = commentBox.value;
    commentBox.value = '';
})