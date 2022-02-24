// $(document).ready(function () {
//     $('#selector').on('change', function () {
//         var divClass = $(this).val();
//         $(".op").hide();
//         $("." + divClass).slideDown('medium');
//     });
// });

$(document).ready(function () {

    $('#document').change(function() {
        if($(this).val() == 1) {
            $('.passenger__doc-passport').show()
            $(`.passenger__doc-birth-certificate`).hide();
        }
        else if($(this).val() == 2) {
            $('.passenger__doc-birth-certificate').show();
            $(`.passenger__doc-passport`).hide();
        }
    });

    $('#pass1-ask').change(function() {
        if($(this).val() == 1) {
            $('.passenger-data').show()
            $(`.passenger-data-ask`).hide();
        }
    });

    $('#pass2-ask').change(function() {
        if($(this).val() == 1) {
            $('.passenger-data').show()
            $(`.passenger-data-ask`).hide();
        }
    });

    $('#check-sort').click(function() {
        $('.cabin__sort-check').slideToggle("fast");
    });


    $('#rate1').change(function() {
        if($(this).val) {
            $('.pricee').show();
        }
    });

    $('#rate2').change(function() {
        if($(this).val) {
            $('.pricee').show();
        }
    });

    // $('#pass').onclick(function() {
    //     if($(this).val() == 'add') {
    //         $('.passenger__doc-passport').show()
    //         $(`.passenger__doc-birth-certificate`).hide();
    //     }
    //     else {
    //         $('.passenger__doc-birth-certificate').show();
    //         $(`.passenger__doc-passport`).hide();
    //     }
    // });


});