import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fancyapps/fancybox';
import WOW from'WOWjs';
import Inputmask from "inputmask";
import valid from "jquery-validation";
//import 'lazyYT/lazyYT.js';

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.771747568988,37.57525249999995],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        });

       let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'http://xxxufa.xyz/logo/mark.png',
            // Размеры метки.
            iconImageSize: [28, 41],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            
        });


    myMap.geoObjects
        .add(myPlacemark)
});

$('.zayv').click(()=> {
	$.fancybox.open($('.modal-z'));
})

$('.menu-gamb').click(function() {
	$(this).next().toggleClass('menu_height');
})


var slider = false;
var image = $('.main__pic_img');
var slick = $(".main__pic");
if (window.matchMedia("(max-width: 976px)").matches) {
		slider = true;
		image.remove();
		slick.slick({
			dots: true
		});
}

$(window).resize(function() {
	if (window.matchMedia("(max-width: 976px)").matches && !slider) {
		image.remove();
		slick.slick({
			dots: true
		});
		slider = true;
	}
})

if (window.matchMedia("(min-width: 1243px)").matches && !slider) {
	new WOW.WOW({
		 mobile: true
	}).init();
}


$('.menu__item').click(function () {
    $('html, body').animate({
        scrollTop: $('.' + $(this).attr('href').substr(1)).offset().top
    }, 500);

    return false;
});

Inputmask("+7 (999) 999-99-99").mask("input[type='tel']");

$('form').submit(function() {
	var form = $(this);
	var error = false;
	
	var nameEl = form.find("input[name=name]");
	var name = nameEl.val().trim();
	if (name === '') {
		nameEl.css('border', '1px solid red');
		error = true;
	} else nameEl.removeAttr('style');
	var tel = form.find("input[type='tel']");
	var number = tel.val().trim();
	var reg = /^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/;
	if(reg.test(number) == false) {
		tel.css('border', '1px solid red');
		error = true;
	} else tel.removeAttr('style');

	var email = form.find("input[type='email']");
	var adress = email.val().trim();
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(reg.test(adress) == false) {
		email.css('border', '1px solid red');
		error = true;
	} else email.removeAttr('style');


	var checkboxEl = form.find("input[name='query']");
	var labelEl = form.find('label');
	if (!$(checkboxEl).prop( "checked")) {
		labelEl.css('color', 'red');
		error = true;
	}else labelEl.removeAttr('style');

	var adress = email.val().trim();
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(reg.test(adress) == false) {
		email.css('border', '1px solid red');
		error = true;
	} else email.removeAttr('style');


	if (error) return false;

	// $.ajax({
	//     url: form.attr('action'),
	//     method: 'post',
	//     dataType: 'html',
	//     data: {
	//     		name: name,
	//     		tel: number,
	//     		email: adress
	//     	},
	//     success: function(data){
	//         alert(data);
 //    	}
	// });
	form.trigger('reset');
	$.fancybox.close($('.modal-z'));
	$.fancybox.open($('.modal-thanks'));
	return false;
})