const mobile_menu = document.querySelector('.menu-icon');
const close_mobile_menu = document.querySelector('.close-icon');

const mobileLinks = document.querySelectorAll('.mobile-link')
const mobileNav = document.querySelector('.mobile-nav')

const body = document.body;

mobile_menu.addEventListener('click', function () {
    mobile_menu.classList.add('active')
    body.classList.add('hide-scroll')
})

close_mobile_menu.addEventListener('click', function () {
    mobile_menu.classList.remove('active')
    body.classList.remove('hide-scroll')
})

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('deactive');

        mobileNav.classList.remove('deactive');

            mobile_menu.classList.remove('active')

                body.classList.remove('hide-scroll')

    });
});



