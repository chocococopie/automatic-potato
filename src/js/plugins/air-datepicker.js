// import 'air-datepicker/dist/js/datepicker';
import AirDatepicker from "air-datepicker";

window.addEventListener('DOMContentLoaded', () => {

    let dpMin, dpMax;

    dpMin = new AirDatepicker('#dateFrom', {
        prevHtml: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.646446 6.64645C0.451184 6.84171 0.451184 7.15829 0.646446 7.35355L3.82843 10.5355C4.02369 10.7308 4.34027 10.7308 4.53553 10.5355C4.7308 10.3403 4.7308 10.0237 4.53553 9.82843L1.70711 7L4.53553 4.17157C4.7308 3.97631 4.7308 3.65973 4.53553 3.46447C4.34027 3.2692 4.02369 3.2692 3.82843 3.46447L0.646446 6.64645ZM13 6.5L1 6.5L1 7.5L13 7.5L13 6.5Z" fill="#000033"/>\n' +
            '</svg>\n',
        nextHtml: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M13.3536 7.35356C13.5488 7.15829 13.5488 6.84171 13.3536 6.64645L10.1716 3.46447C9.97631 3.26921 9.65973 3.26921 9.46447 3.46447C9.2692 3.65973 9.2692 3.97631 9.46447 4.17157L12.2929 7L9.46447 9.82843C9.2692 10.0237 9.2692 10.3403 9.46447 10.5355C9.65973 10.7308 9.97631 10.7308 10.1716 10.5355L13.3536 7.35356ZM1 7.5L13 7.5L13 6.5L1 6.5L1 7.5Z" fill="#000033"/>\n' +
            '</svg>\n',
        navTitles: {
            days: 'MMMM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        onShow() {
            const label = document.querySelector("label[for='dateFrom']");
            label.classList.add("active");
        },
        onHide() {
            const label = document.querySelector("label[for='dateFrom']");
            if (dpMin.selectedDates.length === 0) {
                label.classList.remove("active");
            } else {
                label.classList.add("active");
            }
        },
        onSelect({date}) {
            dpMax.update({
                minDate: date
            })
        }
    })

    dpMax = new AirDatepicker('#dateTo', {
        prevHtml: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.646446 6.64645C0.451184 6.84171 0.451184 7.15829 0.646446 7.35355L3.82843 10.5355C4.02369 10.7308 4.34027 10.7308 4.53553 10.5355C4.7308 10.3403 4.7308 10.0237 4.53553 9.82843L1.70711 7L4.53553 4.17157C4.7308 3.97631 4.7308 3.65973 4.53553 3.46447C4.34027 3.2692 4.02369 3.2692 3.82843 3.46447L0.646446 6.64645ZM13 6.5L1 6.5L1 7.5L13 7.5L13 6.5Z" fill="#000033"/>\n' +
            '</svg>\n',
        nextHtml: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M13.3536 7.35356C13.5488 7.15829 13.5488 6.84171 13.3536 6.64645L10.1716 3.46447C9.97631 3.26921 9.65973 3.26921 9.46447 3.46447C9.2692 3.65973 9.2692 3.97631 9.46447 4.17157L12.2929 7L9.46447 9.82843C9.2692 10.0237 9.2692 10.3403 9.46447 10.5355C9.65973 10.7308 9.97631 10.7308 10.1716 10.5355L13.3536 7.35356ZM1 7.5L13 7.5L13 6.5L1 6.5L1 7.5Z" fill="#000033"/>\n' +
            '</svg>\n',
        navTitles: {
            days: 'MMMM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        onShow() {
            const label = document.querySelector("label[for='dateTo']");
            label.classList.add("active");
        },
        onHide() {
            const label = document.querySelector("label[for='dateTo']");
            if (dpMax.selectedDates.length === 0) {
                label.classList.remove("active");
            } else {
                label.classList.add("active");
            }
        },
        onSelect({date}) {
            dpMin.update({
                minDate: date
            })
        }
    })
})
;

