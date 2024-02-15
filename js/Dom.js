document.getElementById('home-btn').addEventListener('click',function(){
    hidePageById('home-page');
    showPageById('play-ground');
})

document.getElementById('start-btn').addEventListener('click',continueGame)
document.getElementById('play-agin-btn').addEventListener('click',continueGame)
document.addEventListener('keyup',handleKeyboardKeyUpEvent);




