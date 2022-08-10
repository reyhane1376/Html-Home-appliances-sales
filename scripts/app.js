jQuery(document).ready(function($) {
    $('.conter').counterUp({
        delay: 10,
        time: 1000
    });
});
let icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".navbar-right");
icon.addEventListener("click", function() {
    if (icon.classList.contains("fa-bars")) {
        menu.style.right = 0;

        $('body').append('<div class="background-container"></div>');
        $('.background-container').click(function() {
            menu.style.right = "-250px";

            $(this).remove();
        })
    } else {
        menu.style.right = "-250px";

    }
});