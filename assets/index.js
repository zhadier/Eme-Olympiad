// ### Nav Menu ###
const openMenu = document.querySelectorAll('.navbar-main__toggler');
const closeMenu = document.querySelectorAll('.navbar-button__close');
const menu = document.querySelector('.navbar-main__nav');
const menuLinks = document.querySelectorAll('.navbar-main__list li');

closeMenu.forEach((cm) => {
    cm.addEventListener('click', () => {
      menu.classList.toggle('collapse');
    });
    });

openMenu.forEach((om) => {
om.addEventListener('click', () => {
  menu.classList.toggle('collapse');
});
});

menuLinks.forEach((li) => {
  li.addEventListener('click', () => {
    menu.classList.toggle('collapse');
  });
});
