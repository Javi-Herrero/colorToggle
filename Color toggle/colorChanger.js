
document.querySelector('#nav').addEventListener(
    'click', (e) => {
        e.target.nextElementSibling.classList.remove('dropdown-content-initial');
        e.target.nextElementSibling.classList.add('dropdown-content-closed');
        e.target.nextElementSibling.classList.toggle('dropdown-content-open');

    }
)
const closeMenu = () => {
    document.querySelector('.dropdown-content-open').classList.remove('dropdown-content-open');
}

let btns = (Array.from(document.querySelectorAll('li')));
btns.forEach((item) => {

    item.addEventListener(
        'click', (color) => {
            let oldColor = document.getElementById('body').classList.value;
            let newColor = color.target.classList.value
            document.getElementById('body').classList.remove(oldColor)
            document.getElementById('body').classList.add(newColor);
            closeMenu();
        })
});