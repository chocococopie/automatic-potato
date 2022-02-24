window.addEventListener('DOMContentLoaded', () => {

    if (window.matchMedia("(max-width: 1339px)").matches) {
        $(payMove);
    }

    function payMove() {
        $('.chosen-seat__header').append($('.chosen-seat__pay-bottom>div'));
    }

});