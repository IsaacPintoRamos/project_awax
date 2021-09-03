function menuToggle() {
    let menuArea = document.querySelector('nav');
    
    if(menuArea.style.display == 'none') {
        menuArea.style.display = 'block';
    } else{
        menuArea.style.display = 'none';
    }
};
