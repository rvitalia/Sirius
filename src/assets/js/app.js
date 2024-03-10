
window.onload = function () {
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    let myMap = new ymaps.Map("mapsmain", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.734040, 37.432367],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 18
    });

    var myPlacemark = new ymaps.Placemark([55.734040, 37.432367], {
      balloonContent: 'Молодогвардейская улица, 10',
    }, {
      preset: 'islands#redIcon',
      openBalloon: true
    });
    // var myGeoObject = new ymaps.GeoObject({
    //     geometry: {
    //         type: "Point", // тип геометрии - точка
    //         coordinates: [53.188341, 50.104299], // координаты точки
    //         fill: 'red'
    //     }
    // });

    // // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
  }
}


document.querySelector('.burger-icon').addEventListener('click', function () {
  if (this.classList.contains('change')) {
    this.classList.toggle('change');
    closeBurger();
  }
  else {
    this.classList.toggle('change');
    openBurger();
  }
  let menuLinks = document.querySelectorAll('[data-menu]');
  for (const iterator of menuLinks) {
    iterator.addEventListener('click', ()=>{
      closeBurger();
      this.classList.toggle('change');
    })
  }

});


function openBurger() {
  let burger = document.querySelector('[data-burger]');
  burger.classList.add('active');
  setTimeout(() => {
    burger.style.transform = 'rotateY(0)';
  }, 200);
}

function closeBurger() {
  let burger = document.querySelector('[data-burger]');
  burger.style.transform = 'rotateY(90deg)';
  setTimeout(() => {
    burger.classList.remove('active');
  }, 300);
}