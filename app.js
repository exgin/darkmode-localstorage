const darkModeBtn = document.querySelector('input[type="checkbox"]');

if (localStorage.getItem('darkModeOn')) {
    document.body.className = 'dark';
    darkModeBtn.checked = true;
}


darkModeBtn.addEventListener('click', () => {
    if (darkModeBtn.checked === true){
        document.body.className = 'dark';
    } else {
        document.body.className = '';
    }

    if (darkModeBtn.checked === true) {
        localStorage.setItem('darkModeOn', 'on');
    } else {
        localStorage.removeItem('darkModeOn');
    }
});