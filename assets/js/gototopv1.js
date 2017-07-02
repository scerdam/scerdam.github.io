// Only enable if the document has a long scroll bar
// Note the window height + offset
if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}

$(function () {

    "use strict";

    var $bgobj = $(".ha-bg-parallax"); // assigning the object

    $(window).on("scroll", function () {

        var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

        // Put together our final background position

        var coords = '100% ' + yPos + 'px';

        // Move the background

        $bgobj.css({ backgroundPosition: coords });

    });
        $('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function(){
		$(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
		$(this).addClass('selected');
		$(this).find('input[type="radio"]').prop("checked", true);
		
	});

});


 
$('#item0').on('shown.bs.collapse', function () {
   $("#foo").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
});

$('#item0').on('hidden.bs.collapse', function () {
   $("#foo").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
});


$('#item1').on('shown.bs.collapse', function () {
   $("#foo1").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
});

$('#item1').on('hidden.bs.collapse', function () {
   $("#foo1").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
});


$('#promoA').on('shown.bs.collapse', function () {
   $("#foo2").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
});

$('#promoA').on('hidden.bs.collapse', function () {
   $("#foo2").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
});

$('#promoB').on('shown.bs.collapse', function () {
   $("#foo3").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
});

$('#promoB').on('hidden.bs.collapse', function () {
   $("#foo3").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
});

$('#promoC').on('shown.bs.collapse', function () {
   $("#foo4").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
});

$('#promoC').on('hidden.bs.collapse', function () {
   $("#foo4").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
});


$('#promoD').on('shown.bs.collapse', function () {
   $("#foo5").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
});

$('#promoD').on('hidden.bs.collapse', function () {
   $("#foo5").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
});

$('#promo1').on('shown.bs.collapse', function () {
   $("#foo6").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
});

$('#promo1').on('hidden.bs.collapse', function () {
   $("#foo6").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
});
$('#promo2').on('shown.bs.collapse', function () {
   $("#foo7").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
});

$('#promo2').on('hidden.bs.collapse', function () {
   $("#foo7").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
});

$('#promo3').on('shown.bs.collapse', function () {
   $("#foo8").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
});

$('#promo3').on('hidden.bs.collapse', function () {
   $("#foo8").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
});



