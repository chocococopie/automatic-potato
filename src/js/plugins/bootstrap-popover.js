$(document).ready(function () {

    // let infoPopover = document.querySelector('.infoPopover');
    // let infoBtn = document.querySelector('.infoBtn');
    $(".info__popover").hide();

    $(".info__btn").click(function () {
        $(".info__popover").toggle();
    });

});
