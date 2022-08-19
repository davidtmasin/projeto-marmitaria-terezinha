let close = document.getElementById('close');
let popup = document.getElementById('popup');

window.addEventListener("load", loadPoup())

function loadPoup() {
    setTimeout(() => {
        popup.style.visibility = "visible"
        popup.style.opacity = '0.3';
    }, 250)

    setTimeout(() => {
        popup.style.opacity = '0.6';
    }, 250)

    setTimeout(() => {
        popup.style.opacity = '0.9';
    }, 250)

    setTimeout(() => {
        popup.style.opacity = '1';
    }, 250)
    popup.style.opacity = '0'
    popup.style.visibility = 'hidden'
}

close.addEventListener("click", function () {
    popup.removeAttribute('style')
    popup.removeAttribute('class')
    popup.classList.toggle("m-fadeOut")
})


