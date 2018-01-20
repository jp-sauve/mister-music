$(document).ready(function() {
    $(document).keydown( sound );
    $('#button-bar').on("click",".drum-button", sound);

})
function sound(el) {

    let clicked = el.currentTarget.name || el.which;
    let sound = document.querySelector(`audio[data-key="${clicked}"]`);
    console.log('Found click: ' + clicked);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
}