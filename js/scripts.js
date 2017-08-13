/*Yandex MAP*/
function initYandexMap(){   
       
    //create map
    var myMap = new ymaps.Map("yandex-map-container", {
        center: [45.06062815, 38.98253440],
        zoom: 12,
    });
    
    
    var myPlacemark = new ymaps.Placemark([45.06062815, 38.98253440], {
            hintContent: 'Москва!',
            balloonContent: 'Столица России',
        }, 
        {
            draggable: true, // Метку можно перемещать.
            preset: 'islands#blueCircleIcon',
        }
    );
    
    myPlacemark.events.add('dragend', function(e) {
       // Получение ссылки на объект, который был передвинут.
       var thisPlacemark = e.get('target');
       // Определение координат метки
       var coords = thisPlacemark.geometry.getCoordinates();
       // и вывод их при щелчке на метке
       thisPlacemark.properties.set('balloonContent', coords);
    });
    
    myMap.geoObjects.add(myPlacemark); 
}

$(document).ready(function (){
    
    ymaps.ready(initYandexMap);
    
});