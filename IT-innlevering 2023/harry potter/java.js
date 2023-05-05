


const menuBTN = document.querySelector(".hamburger")
let menuOpen = false;
menuBTN.addEventListener('click', () => {
    if(!menuOpen) {
        menuBTN.classList.add('open');
        menuOpen = true;
    } else {
        menuBTN.classList.remove('open');
        menuOpen =false;
    }
});

const toggleButton = document.getElementById('toggle-button');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
})











