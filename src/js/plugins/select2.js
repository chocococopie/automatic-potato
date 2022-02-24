import select2 from 'select2';

window.select2 = select2();

function formatState(state) {
    if (!state.id) {
        return state.text;
    }

    var baseUrl = "/img/search-cruise";
    var $state = $(
        '<span class="d-flex align-items-center"><img class="img-flag" /> <span></span></span>'
    );

    // Use .text() instead of HTML string concatenation to avoid script injection issues
    $state.find("span").text(state.text);
    $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");

    return $state;
};

function formatBirthday(birth) {
    if (!birth.id) {
        return birth.text;
    }

    var $birth = $(
        '<span class="align-items-center"><span></span><p class="pass-text"></p></span>'
    );

    $birth.find("span").text(birth.text);
    $birth.find("p.pass-text").text('12.12.1980');


    return $birth;
};

function formatDocument(docum) {
    if (!docum.id) {
        return docum.text;
    }

    var $docum = $(
        '<span class="align-items-center"><span></span><p class="pass-text"></p></span>'
    );

    $docum.find("span").text(docum.text);
    $docum.find("p.pass-text").text('3123  535362');


    return $docum;
};

$(document).ready(function () {
    $('.select2').select2({
        placeholder: $(this).data('placeholder'),
        language: {
            noResults: function () {
                return "Не найдено"
            }
        }
    });

    $(document).on('select2:open', (e) => {
        var selectId = e.target.id;

        $(".select2-search__field[aria-controls='select2-" + selectId + "-results']").each(function (
            key,
            value,
        ) {
            value.focus();
        });

        $(".search-cruise-select__label[for='" + selectId + "']").addClass('active');
    });

    $(document).on('select2:close', (e) => {
        var selectId = e.target.id;
        if ($("#" + selectId).val() === '') {
            $(".search-cruise-select__label[for='" + selectId + "']").removeClass('active');
        }
    });

    $(document).on('select2:select', (e) => {
        var selectId = e.target.id;
        $(".search-cruise-select__label[for='" + selectId + "']").addClass('active');
    });

    $('.select2.select2WithoutSearch').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        language: {
            noResults: function () {
                return "Не найдено"
            }
        },
        escapeMarkup: function (m) {
            return m;
        },
        dropdownPosition: 'below',
        templateSelection: formatState,
        templateResult: formatState,
        dropdownCssClass: 'river__sorting-dropdown'
    });

    $('.select2.select2ForDocuments').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        language: {
            noResults: function () {
                return "Не найдено"
            }
        },
        dropdownPosition: 'below'
    });

    $('.select2.select2ForNewPassenger').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        language: {
            noResults: function () {
                return "Не найдено"
            }
        },
        dropdownCssClass: 'passenger__new',
        dropdownPosition: 'below'
    });

    $('.select2.select2AddPassenger').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        language: {
            noResults: function () {
                return "Не найдено"
            }
        },
        dropdownCssClass: 'passenger__add',
        dropdownPosition: 'below'
    });

    $('.select2.select2SeatChoice').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        language: {
            noResults: function () {
                return "Не найдено"
            }
        },
        dropdownCssClass: 'passenger__add',
        dropdownPosition: 'below'
    });

    $('.select2.select2AddPassengerName').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        language: {
            noResults: function () {
                return "Не найдено"
            }
        },
        templateSelection: formatBirthday,
        templateResult: formatBirthday,
        dropdownCssClass: 'passenger__add',
        dropdownPosition: 'below'
    });

    $('.select2.select2AddPassengerDocument').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        language: {
            noResults: function () {
                return "Не найдено"
            }
        },
        templateSelection: formatDocument,
        templateResult: formatDocument,
        dropdownCssClass: 'passenger__add',
        dropdownPosition: 'below'
    });

    // $('.select2.select2Tarif').select2({
    //     placeholder: $(this).data('placeholder'),
    //     minimumResultsForSearch: Infinity,
    //     language: {
    //         noResults: function () {
    //             return "Не найдено"
    //         }
    //     },
    //     dropdownCssClass: 'passenger__tarif',
    //     dropdownPosition: 'below'
    // });

    // $('.select2.select2WithCustomOption').select2({
    // 	placeholder: $(this).data('placeholder'),
    // 	minimumResultsForSearch: Infinity,
    // });

    // $('.select2.select2WithCustomPosition').select2({
    //     placeholder: $(this).data('placeholder'),
    //     dropdownCssClass: 'customPosition',
    //     language: {
    //         noResults: function () {
    //             return "Не найдено"
    //         }
    //     }
    // });
    //
    // let menuElem = document.getElementById('document');
    // let titleElem = menuElem.querySelectorAll('input[value="passport"]');
    //
    // titleElem.onclick = function() {
    //     menuElem.classList.toggle('open');
    // };

    // $('#document').change(function() {
    //     if($(this).val() == 1) {
    //         $('.passenger__doc-passport').show()
    //         $(`.passenger__doc-birth-certificate`).hide();
    //     }
    //     else {
    //         $('.passenger__doc-birth-certificate').show();
    //         $(`.passenger__doc-passport`).hide();
    //     }
    // });

});
