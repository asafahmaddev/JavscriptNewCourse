//navegitation bar, sticky

window.addEventListener('scroll',
    function () {
        // if (this.window.pageYOffset >= 411) {
        //  console.log('hello...')}

        let navbar = this.document.getElementById('menu-bar');

        if (window.pageXOffset >= 411) {
            navbar.classList.add('sticky');
        }
        else {
            // navbar.classList.remove('sticky')
        }

    }
);