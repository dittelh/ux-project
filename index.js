function popUp(boxName) {
    let popupBox = document.getElementById(boxName);
    let blurBoxes = document.getElementsByClassName('popUpBlur');

    for (let i = 0; i < blurBoxes.length; i++) {
        blurBoxes[i].classList.toggle('blur');
    }
    popupBox.classList.toggle('showVideo');
}