//import 'slick-carousel';
import '@fancyapps/fancybox';
//import 'lazyYT/lazyYT.js';
import './fonts/fonts.css';

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