import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

window.bootstrap = {
	Tooltip: {
		VERSION: 5,
	}
}

window.addEventListener('DOMContentLoaded', () => {
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl, {
			template: '<div class="tooltip custom-tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
		});
	});
});


// $(document).ready(function () {
// 	$('.detail__accordion').on('click', function () {
// 		$('.cabin__item').slideToggle( "fast");
// 	});
// });

// var acc = document.getElementsByClassName("detail__accordion");
// var i;
//
// for (i = 0; i < acc.length; i++) {
// 	acc[i].addEventListener("click", function() {
// 		/* Toggle between adding and removing the "active" class,
//         to highlight the button that controls the panel */
// 		this.classList.toggle("active");
//
// 		/* Toggle between hiding and showing the active panel */
// 		var cabin__item = this.nextElementSibling;
// 		if (cabin__item.style.display === "block") {
//             cabin__item.style.display = "none";
// 		} else {
// 			cabin__item.style.display = "block";
// 		}
// 	});
// }