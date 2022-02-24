// window.addEventListener('DOMContentLoaded', () => {
//
//     function searchToggle(obj, evt) {
//         let container = $(obj).closest('.search-wrapper');
//         if (!container.hasClass('active')) {
//             container.addClass('active');
//         } else if (container.hasClass('active') && $(obj).closest('.input-holder').length === 0) {
//             container.removeClass('active');
//             // clear input
//             container.find('.search-input').val('');
//         }
//     }
//
//     // let searchIcon = document.getElementById('searchIcon');
//     // let closeIcon = document.getElementById('closeIcon');
//     //
//     // // searchIcon.onclick = searchToggle(this, event);
//     // // closeIcon.onclick = searchToggle(this, event);
//     //
//     // searchIcon.addEventListener("click", searchToggle);
//     //         console.log('hello');
//
//
//     // document.getElementById('searchIcon').addEventListener('click', searchToggle);
//
//     onload = function () {
//         document.getElementById('searchIcon').onclick = searchToggle;
//         console.log('hi');
//     };
//
// });