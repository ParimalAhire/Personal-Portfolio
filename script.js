function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleContactForm() {
    const formContainer = document.getElementById('contact-form-container');
    formContainer.classList.toggle('open');
    
    const contactSection = document.getElementById('contact');
    if (formContainer.classList.contains('open')) {
        contactSection.style.height = 'auto';
    } else {
        contactSection.style.height = '12rem';
    }
}
