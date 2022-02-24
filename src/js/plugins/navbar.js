window.addEventListener('DOMContentLoaded', () => {

    if (window.matchMedia("(min-width: 1440px)").matches) {
        $(logoMove);
        $(dropdownMove);
    } else {
        $(scheduleMove);
        $(loginMove);
    }

    function logoMove() {
        $('#bottomMenu').append($('#topMenu>a'));
        $('#logoBottom').append($('#bottomMenu>a'));
    }

    function dropdownMove() {

        $('#mainMenu').append($('#navbarSupportedContent>ul'));
        $('#bottomMenu').append($('#mainMenu>ul'));
        $('#dropdownBottom').append($('#bottomMenu>ul'));
    }

    function scheduleMove() {
        $('#topMenu').append($('#topMenuRight>#scheduleMenu'));
        $('#mainMenu').append($('#topMenu>#scheduleMenu'));
        $('#navbarSupportedContent').append($('#mainMenu>#scheduleMenu'));
        $('#liSchedule').append($('#navbarSupportedContent>#scheduleMenu'));
    }

    function loginMove() {
        $('#topMenu').append($('#topMenuRight>#loginMenu'));
        $('#mainMenu').append($('#topMenu>#loginMenu'));
        $('#navbarSupportedContent').append($('#mainMenu>#loginMenu'));
        $('#liSchedule').append($('#navbarSupportedContent>#loginMenu'));
    }

});