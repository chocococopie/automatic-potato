import 'bootstrap-table/dist/bootstrap-table.min';
import 'bootstrap-table/dist/locale/bootstrap-table-ru-RU.min';

$(document).ready(function () {
	var tableData = [
		{
			id: 1,
			season: `<span class="text-navy">2021</span>`,
			dateFromSeason: `<span class="text-navy">05.08</span>
			<span class="text-muted">18:00</span>`,
			dateToSeason: `<span class="text-navy">13.08</span>
			<span class="text-muted">20:00</span>`,
			seasonRoute: `<ul class="text-blue">
			<li>Казань</li>
			<li>Жигулевские горы</li>
			<li>Самара</li>
			<li>Жигулевские ворота</li>
			<li>Тольятти</li>
			<li>Волжский Утёс</li>
			<li>Жигулевская ГЭС</li>
			<li>Яблоневый овраг</li>
			<li>Молодецкий курган</li>
			<li>Болгары</li>
			<li>Ундоровские горы</li>
			<li>Тетюшские горы</li>
			<li>Зольные горы</li>
			<li>Чебоксары</li>
			<li>Н.Новгород</li>
			<li>Городец</li>
			<li>Чкаловск</li>
			<li>Ярославль</li>
			<li>Углич</li>
			<li>Калязин</li>
			<li>Москва (СРВ)</li>
		</ul>`,
			seasonShip: `<span class="text-blue">Княжна Анастасия</span>`,
			seasonDays: `<span class="text-navy">9</span>`,
			seasonPriceFrom: `<div class="d-flex flex-column">
			<span class="line-through text-gray">60 000 ₽</span>
			<span class="text-yellow">50 000 ₽</span>
			</div>`,
			seasonLoading: `<span class="text-navy">99/88/88/88</span>`
		},
		{
			id: 2,
			season: `<span class="text-navy">2021</span>`,
			dateFromSeason: `<span class="text-navy">05.08</span>
			<span class="text-muted">18:00</span>`,
			dateToSeason: `<span class="text-navy">13.08</span>
			<span class="text-muted">20:00</span>`,
			seasonRoute: `<ul class="text-blue">
			<li>Москва (СРВ)</li>
			<li>Углич</li>
			<li>Кузино</li>
			<li>Горицы</li>
			<li>Мандроги</li>
			<li>Великий Новгород</li>
			<li>Старая Ладога</li>
			<li>Санкт-Петербург (Соляной причал)</li>
		</ul>`,
			seasonShip: `<span class="text-blue">Сергей Образцов</span>`,
			seasonDays: `<span class="text-navy">9</span>`,
			seasonPriceFrom: `<div class="d-flex flex-column">
			<span class="line-through text-gray">60 000 ₽</span>
			<span class="text-yellow">50 000 ₽</span>
			</div>`,
			seasonLoading: `<span class="text-navy">99/88/88/88</span>`
		},
		{
			id: 3,
			season: `<span class="text-navy">2021</span>`,
			dateFromSeason: `<span class="text-navy">05.08</span>
			<span class="text-muted">18:00</span>`,
			dateToSeason: `<span class="text-navy">13.08</span>
			<span class="text-muted">20:00</span>`,
			seasonRoute: `<ul class="text-blue">
			<li>Москва (СРВ)</li>
			<li>Углич</li>
			<li>Кузино</li>
			<li>Горицы</li>
			<li>Мандроги</li>
			<li>Великий Новгород</li>
			<li>Старая Ладога</li>
			<li>Санкт-Петербург (Соляной причал)</li>
		</ul>`,
			seasonShip: `<span class="text-blue">Княжна Анастасия</span>`,
			seasonDays: `<span class="text-navy">9</span>`,
			seasonPriceFrom: `<span class="text-navy">60 000 ₽</span>`,
			seasonLoading: `<span class="text-navy">99/88/88/88</span>`
		},
		{
			id: 4,
			season: `<span class="text-navy">2021</span>`,
			dateFromSeason: `<span class="text-navy">05.08</span>
			<span class="text-muted">18:00</span>`,
			dateToSeason: `<span class="text-navy">13.08</span>
			<span class="text-muted">20:00</span>`,
			seasonRoute: `<ul class="text-blue">
			<li>Казань</li>
			<li>Жигулевские горы</li>
			<li>Самара</li>
			<li>Жигулевские ворота</li>
			<li>Тольятти</li>
			<li>Волжский Утёс</li>
			<li>Жигулевская ГЭС</li>
			<li>Яблоневый овраг</li>
			<li>Молодецкий курган</li>
			<li>Болгары</li>
			<li>Ундоровские горы</li>
			<li>Тетюшские горы</li>
			<li>Зольные горы</li>
			<li>Чебоксары</li>
			<li>Н.Новгород</li>
			<li>Городец</li>
			<li>Чкаловск</li>
			<li>Ярославль</li>
			<li>Углич</li>
			<li>Калязин</li>
			<li>Москва (СРВ)</li>
		</ul>`,
			seasonShip: `<span class="text-blue">Михаил Булгаков</span>`,
			seasonDays: `<span class="text-navy">9</span>`,
			seasonPriceFrom: `<div class="d-flex flex-column">
			<span class="line-through text-gray">60 000 ₽</span>
			<span class="text-yellow">50 000 ₽</span>
			</div>`,
			seasonLoading: `<span class="text-navy">99/88/88/88</span>`
		},
		{
			id: 5,
			season: `<span class="text-navy">2021</span>`,
			dateFromSeason: `<span class="text-navy">05.08</span>
			<span class="text-muted">18:00</span>`,
			dateToSeason: `<span class="text-navy">13.08</span>
			<span class="text-muted">20:00</span>`,
			seasonRoute: `<ul class="text-blue">
			<li>Казань</li>
			<li>Жигулевские горы</li>
			<li>Самара</li>
			<li>Жигулевские ворота</li>
			<li>Тольятти</li>
			<li>Волжский Утёс</li>
			<li>Жигулевская ГЭС</li>
			<li>Яблоневый овраг</li>
			<li>Молодецкий курган</li>
			<li>Болгары</li>
			<li>Ундоровские горы</li>
			<li>Тетюшские горы</li>
			<li>Зольные горы</li>
			<li>Чебоксары</li>
			<li>Н.Новгород</li>
			<li>Городец</li>
			<li>Чкаловск</li>
			<li>Ярославль</li>
			<li>Углич</li>
			<li>Калязин</li>
			<li>Москва (СРВ)</li>
		</ul>`,
			seasonShip: `<span class="text-blue">Александр Грин</span>`,
			seasonDays: `<span class="text-navy">9</span>`,
			seasonPriceFrom: `<div class="d-flex flex-column">
			<span class="line-through text-gray">60 000 ₽</span>
			<span class="text-yellow">50 000 ₽</span>
			</div>`,
			seasonLoading: `<span class="text-navy">99/88/88/88</span>`
		}
	];
	var tableDataReserve = [
		{
			id: 1,
			number: 123122,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 2,
			number: 213427,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 3,
			number: 313989,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 4,
			number: 413109,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 5,
			number: 410709,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 6,
			number: 416109,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 7,
			number: 883109,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 8,
			number: 419909,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 9,
			number: 413439,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 10,
			number: 413101,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 11,
			number: 413101,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 12,
			number: 413101,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 13,
			number: 413101,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 14,
			number: 413101,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
		{
			id: 15,
			number: 413101,
			date: '22.09.2020',
			payDate: '22.09.2020',
			trip: '134004 от 26.06.21',
			ship: 'Николай КАРАМЗИН',
			goingDate: '22.09.2020',
			cabins: '357, 352',
			status: 'Оплачено',
			sum: '5 434 628'
		},
	];

	$('#viewTable').click(function () {
		$('#tableList').bootstrapTable({
			columns: [{
				checkbox: true,
				title: '',
			}, {
				field: 'season',
				title: 'Сезон',
				sortable: true,
			}, {
				field: 'dateFromSeason',
				title: 'Начало',
				sortable: true,
			}, {
				field: 'dateToSeason',
				title: 'Окончание',
				sortable: true,
			}, {
				field: 'seasonRoute',
				title: 'Маршрут',
			}, {
				field: 'seasonShip',
				title: 'Теплоход',
				sortable: true,
			}, {
				field: 'seasonDays',
				title: 'Дней',
				sortable: true,
			}, {
				field: 'seasonPriceFrom',
				title: 'Цена от',
				sortable: true,
			}, {
				field: 'seasonLoading',
				title: 'Загрузка',
				sortable: true,
			}],
			data: tableData,
			showColumns: false,
			pagination: false,
			locale: 'ru-RU',
			classes: 'table table-hover table-borderless',
			toolbar: '#toolbarRiver',
		});
	});

	$('#viewCard').click(function () {
		$('#tableList').bootstrapTable('destroy');
	});

	$('#historyTable').bootstrapTable({
		columns: [{
			field: 'number',
			title: 'Номер',
			sortable: true,
			switchable: true,
		}, {
			field: 'date',
			title: 'Дата',
			sortable: true,
			switchable: true,
		}, {
			field: 'payDate',
			title: 'Срок оплаты',
			sortable: true,
			switchable: true,
		}, {
			field: 'trip',
			title: 'Путевка',
			sortable: true,
			switchable: true,
		}, {
			field: 'ship',
			title: 'Теплоход',
			sortable: true,
			switchable: true,
		}, {
			field: 'goingDate',
			title: 'Отправление',
			sortable: true,
			switchable: true,
		}, {
			field: 'cabins',
			title: 'Каюты',
			sortable: true,
			switchable: true,
		}, {
			field: 'status',
			title: 'Статус',
			sortable: true,
			switchable: true,
		}, {
			field: 'sum',
			title: 'Сумма',
			sortable: true,
			switchable: true,
		}],
		data: tableDataReserve,
		paginationDetailHAlign: 'right',
		pagination: true,
		paginationNextText: '>',
		paginationPreText: '<',
		paginationLoop: false,
		pageList: '[5, 10, 25, All]',
		showColumns: false,
		buttonsAlign: 'right',
		showButtonIcons: true,
		buttonsClass: 'outline-light',
		showButtonText: true,
		minimumCountColumns: 2,
		classes: 'table table-hover table-borderless',
		locale: 'ru-RU',
	});

	$('#viewTableReserve').click(function () {
		$('#tableListReserve').bootstrapTable({
			columns: [{
				field: 'number',
				title: 'Номер',
				sortable: true,
				switchable: true,
			}, {
				field: 'date',
				title: 'Дата',
				sortable: true,
				switchable: true,
			}, {
				field: 'payDate',
				title: 'Срок оплаты',
				sortable: true,
				switchable: true,
			}, {
				field: 'trip',
				title: 'Путевка',
				sortable: true,
				switchable: true,
			}, {
				field: 'ship',
				title: 'Теплоход',
				sortable: true,
				switchable: true,
			}, {
				field: 'goingDate',
				title: 'Отправление',
				sortable: true,
				switchable: true,
			}, {
				field: 'cabins',
				title: 'Каюты',
				sortable: true,
				switchable: true,
			}, {
				field: 'status',
				title: 'Статус',
				sortable: true,
				switchable: true,
			}, {
				field: 'sum',
				title: 'Сумма',
				sortable: true,
				switchable: true,
			}],
			data: tableDataReserve,
			paginationDetailHAlign: 'right',
			pagination: true,
			paginationNextText: '>',
			paginationPreText: '<',
			paginationLoop: false,
			pageList: '[5, 10, 25, All]',
			showColumns: true,
			buttonsAlign: 'left',
			showButtonIcons: true,
			buttonsClass: 'outline-light',
			showButtonText: true,
			minimumCountColumns: 2,
			classes: 'table table-hover table-borderless',
			locale: 'ru-RU',
		});
	});

	$('#viewCardReserve').click(function () {
		$('#tableListReserve').bootstrapTable('destroy');
	});

	var bonusTableData = [
		{
			'id': 0,
			'date': '23.09.2020',
			'sum': '+350'
		},
		{
			'id': 1,
			'date': '25.09.2020',
			'sum': '+317'
		},
		{
			'id': 2,
			'date': '20.12.2020',
			'sum': '-667'
		},
		{
			'id': 3,
			'date': '20.03.2021',
			'sum': '+310'
		},
		{
			'id': 4,
			'date': '23.09.2020',
			'sum': '+350'
		}
	];

	$('#bonusHistory').bootstrapTable({
		columns: [
			{
				field: 'date',
				title: 'Дата',
				sortable: true,
				footerFormatter: function () {
					return 'Текущий остаток';
				}
			},
			{
				field: 'sum',
				title: 'Сумма',
				sortable: true,
				footerFormatter: function () {
					return '310';
				},
			}
		],
		data: bonusTableData,
	});

	var passTableData = [
		{
			'id': 0,
			'fio': 'Тихомиров Константин Константинович',
			'citizenship': 'Российская Федерация',
			'doc': 'Паспорт РФ 2222 №123358',
			'address': 'Лесная ул., д. 5, кв. 46 Москва Россия, 125075',
			'email': 'asd@asd.com',
			'mobile': '+7 (937) 397-77-77',
		},
		{
			'id': 1,
			'fio': 'Тихомиров Константин Константинович',
			'citizenship': 'Российская Федерация',
			'doc': 'Паспорт РФ 3333 №445454',
			'address': 'Лесная ул., д. 5, кв. 46 Москва Россия, 125075',
			'email': 'Tihomir11111@mail.ru',
			'mobile': '+7 (345) 789-24-23',
		},
		{
			'id': 2,
			'fio': 'Иванов Иван Иванович',
			'citizenship': 'Российская Федерация',
			'doc': 'Паспорт РФ 5423 №445454',
			'address': 'Лесная ул., д. 5, кв. 46 Москва Россия, 125075',
			'email': 'Tihom45654ке@mail.ru',
			'mobile': '+7 (442) 876-38-23',
		},
	];

	$('#passTable').bootstrapTable({
		columns: [
			{
				field: 'fio',
				title: 'ФИО',
				sortable: true,
			},
			{
				field: 'citizenship',
				title: 'Гражданство',
				sortable: true,
			},
			{
				field: 'doc',
				title: 'Документ',
				sortable: true,
			},
			{
				field: 'address',
				title: 'Почтовый адрес',
				sortable: true,
			},
			{
				field: 'email',
				title: 'Email',
				sortable: true,
			},
			{
				field: 'mobile',
				title: 'Телефон',
				sortable: true,
			},
			{
				field: 'mobile',
				title: 'Телефон',
				sortable: true,
			},
			{
				field: 'operate',
				title: '',
				sortable: false,
				formatter: function (value, row, index) {
					return (
						`<div class="lk__pass-table">
						<button class="btn btn-outline-light passEditBtn" type="button"></button>
						<div class="lk__pass-table-operations">
						<a class="link-blue edit" href="javascript:void(0)" title="Редактировать">Редактировать</a>
						<a class="link-gray remove" href="javascript:void(0)" title="Удалить">Удалить</a>
</div>
						</div>`
					);
				},
			},
		],
		data: passTableData,
	});

	window.operateEvents = {
		'click .remove': function (e, value, row, index) {
			$('#passTable').bootstrapTable('remove', {
				field: 'id',
				values: [row.id]
			})
		}
	}
});
