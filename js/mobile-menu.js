document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevents the click from bubbling up to the document
            
            mainNav.classList.toggle('mobile-menu-active');
            
            // Handle body scroll locking
            if (mainNav.classList.contains('mobile-menu-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            
            console.log('Mobile menu toggled. Active:', mainNav.classList.contains('mobile-menu-active'));
        });

        // Close menu cleanly when a link inside is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('mobile-menu-active');
                document.body.style.overflow = '';
            });
        });

        // Close menu if user clicks anywhere outside the nav area
        document.addEventListener('click', function(e) {
            if (mainNav.classList.contains('mobile-menu-active')) {
                if (!mainNav.contains(e.target)) {
                    mainNav.classList.remove('mobile-menu-active');
                    document.body.style.overflow = '';
                }
            }
        });
    }
});