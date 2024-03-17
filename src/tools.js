export function autoScroll(id, offset = 0){
    const element = document.getElementById(id);
    window.scrollTo({
        top: element.offsetTop + offset,
        behavior: 'smooth'
    });
}
