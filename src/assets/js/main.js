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