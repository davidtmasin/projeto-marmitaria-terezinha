var close = document.getElementById('close');
var popup = document.getElementById('popup');

close.addEventListener("click", function () {
    // popup.style.display = 'none';
    setTimeout(() => {
        popup.style.opacity = '0.9';
    }, 500)

    setTimeout(() => {
        popup.style.opacity = '0.6';
    }, 500)

    setTimeout(() => {
        popup.style.opacity = '0.9';
    }, 500)
    setTimeout(() => {
        popup.style.opacity = '0';
    }, 500)
})


function loadPoup() {
    setTimeout(() => {
        popup.style.opacity = '0.3';
    }, 1000)

    setTimeout(() => {
        popup.style.opacity = '0.6';
    }, 1000)

    setTimeout(() => {
        popup.style.opacity = '0.9';
    }, 1000)

    setTimeout(() => {
        popup.style.opacity = '1';
    }, 1000)
}
