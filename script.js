let anims = document.querySelectorAll('.animated');

window.addEventListener('scroll', check);

function check() {
    for (const elem of anims) {
        if (elem.getBoundingClientRect().top<window.innerHeight){
            elem.classList.add('show');
        }
        else elem.classList.remove('show');
    }
}