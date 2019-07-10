var app = {
  init: function() {
    console.log('App init');
    app.onBurgerMenuClick();
  },

  onBurgerMenuClick: function() {
    const menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', app.toggleClass)
  },

  toggleClass: function() {
    const navigation = document.querySelector('.site-nav');
    navigation.classList.toggle('site-nav--open');
    // this = const menu
    this.classList.toggle('open');
  }
}

document.addEventListener('DOMContentLoaded', app.init);


