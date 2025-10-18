
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            alert('Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
});