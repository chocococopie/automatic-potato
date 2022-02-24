window.addEventListener('DOMContentLoaded', () => {
	const noLink = document.querySelectorAll('.noLink');

	noLink.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
		});
	});

	const activeToggle = (firstButton, secondButton, firstShowContent = null, secondShowContent = null) => {
		const firstBtn = document.querySelector(firstButton),
			secondBtn = document.querySelector(secondButton),
			firstBtnContent = document.querySelector(firstShowContent),
			secondBtnContent = document.querySelector(secondShowContent);

		firstBtn?.addEventListener('click', () => {
			if (!firstBtn.classList.contains('active')) {
				firstBtn.classList.add('active');
				secondBtn.classList.remove('active');
				firstBtnContent?.classList.add('show');
				secondBtnContent?.classList.remove('show');
			}
		});

		secondBtn?.addEventListener('click', () => {
			if (!secondBtn.classList.contains('active')) {
				secondBtn.classList.add('active');
				firstBtn.classList.remove('active');
				secondBtnContent?.classList.add('show');
				firstBtnContent?.classList.remove('show');
			}
		});
	};

	activeToggle('#viewTable', '#viewCard', '#tableList', '#cardList');
	activeToggle('#langRu', '#langEn');
	activeToggle('#viewTableReserve', '#viewCardReserve', '#tableListReserve', '#cardListReserve');

	const showHidePassword = () => {
		const input = document.querySelectorAll('.js-input-pass'),
			eye = document.querySelectorAll('.js-eye');

		eye.forEach((el, index) => {
			el.addEventListener('click', () => {
				input[index].type === 'password' ? input[index].type = 'text' : input[index].type = 'password';
			});
		});
	};

	showHidePassword();

	const seat = document.querySelectorAll('.seat__item');

	seat?.forEach((item) => {
		if (!item.classList.contains('busy-cabin') && !item.classList.contains('reserved-cabin')) {
			item.addEventListener('click', () => {
				item.classList.toggle('selected-cabin');
			});
		}
	});

	const imgAlt = document.querySelectorAll('.imgAlt');

	imgAlt?.forEach((item) => {
		const facilityImg = item.querySelectorAll('.cabin__facilities-item img');

		facilityImg.forEach((el) => {
			const span = document.createElement('span');
			span.classList.add('img-tooltip');
			span.textContent = el.getAttribute('alt');
			el.after(span);

			el.addEventListener('mousemove', () => {
				span.classList.add('show');
				span.style.bottom = `calc(100% + 2px)`;
				span.style.left = '50%';
				span.style.transform = 'translateX(-50%)';
			});
			el.addEventListener('mouseleave', () => {
				span.classList.remove('show');
			})
		});
	});

	const passEditBtn = document.querySelectorAll('.passEditBtn');

	passEditBtn?.forEach((item) => {
		item.addEventListener('click', () => {
			const btnWrap = document.querySelector(`${item} + .lk__pass-table-operations`);

			btnWrap.classList.toggle('show');
		});
	});

	const nextCompareBtn = document.querySelector('#nextCompareBtn'),
		prevCompareBtn = document.querySelector('#prevCompareBtn'),
		compareList = document.querySelectorAll('.compare__list'),
		compareItem = document.querySelector('.compare__list-item'),
		compareItemAll = compareList[0]?.querySelectorAll('.compare__list-item'),
		compareItemLength = compareList[0]?.querySelectorAll('.compare__list-item').length;

	let offsetCompare = 0;

	let compareItemWidth = compareItem?.offsetWidth;

	if (compareItemAll?.length > 3) {
		nextCompareBtn.classList.add('show');
		prevCompareBtn.classList.add('show');
	}

	nextCompareBtn?.addEventListener('click', () => {

		offsetCompare += compareItemWidth;

		if (offsetCompare >= (compareItemLength - 3) * compareItemWidth) {
			offsetCompare = (compareItemLength - 3) * compareItemWidth;
		}

		compareList.forEach((item) => {
			item.style.left = -offsetCompare + 'px';
		});
	});

	prevCompareBtn?.addEventListener('click', () => {

		offsetCompare -= compareItemWidth;

		if (offsetCompare <= 0) {
			offsetCompare = 0;
		}

		compareList.forEach((item) => {
			item.style.left = -offsetCompare + 'px';
		});
	});

	// const loginToggle = document.querySelector('#authLoginToggle');
	//
	// loginToggle?.addEventListener('click', () => {
	// 	if (loginToggle.textContent === 'Войти с паролем') {
	// 		loginToggle.textContent = 'Войти по номеру телефона';
	// 	} else {
	// 		loginToggle.textContent = 'Войти с паролем';
	// 	}
	//
	// 	const authLogin = document.querySelectorAll('.auth__login');
	//
	// 	authLogin?.forEach((el) => {
	// 		if (el.classList.contains('show')) {
	// 			el.classList.remove('show');
	// 		} else {
	// 			el.classList.add('show');
	// 		}
	// 	})
	// });

});
