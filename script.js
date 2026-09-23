// Mobile Menu Toggle
function showMenu() {
    const navBar = document.getElementById('nav-bar');
    const menuShow = document.getElementById('mobile-menu_show');
    const menuHide = document.getElementById('mobile-menu_hide');
    
    navBar.classList.add('active');
    menuShow.style.display = 'none';
    menuHide.style.display = 'block';
}

function hideMenu() {
    const navBar = document.getElementById('nav-bar');
    const menuShow = document.getElementById('mobile-menu_show');
    const menuHide = document.getElementById('mobile-menu_hide');
    
    navBar.classList.remove('active');
    menuShow.style.display = 'block';
    menuHide.style.display = 'none';
}

// Popup functions for newsletter
function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    // Auto-close after 4 seconds
    setTimeout(() => {
        closePopup();
    }, 4000);
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    
    // clear input
    const input = document.querySelector('.input-field input');
    if(input) {
        input.value = '';
    }
}
