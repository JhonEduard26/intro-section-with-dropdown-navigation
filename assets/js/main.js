/* Open Menu Mobile */
const menuImg = document.querySelector('.icon-menu')
const menuContainer = document.querySelector('.menu__container')

const openMenu = () => {
  menuContainer.style.right = 0
}
menuImg.addEventListener('click', openMenu)

/* Close menu mobile */
const iconClose = document.querySelector('.icon-close')

const closeMenu = () => {
  menuContainer.style.right = '-100%'
}
iconClose.addEventListener('click', closeMenu)

/* Expand and Collapsed menu */
const iconsArrowDown = document.querySelectorAll('.toggle-arrow')

const toggleMenu = (event) => {
  const iconArrow = event.target.nextElementSibling
  const list = iconArrow.nextElementSibling
  iconArrow.classList.toggle('arrow-down--active')
  list.style.display === 'flex' ? (list.style.display = 'none') : (list.style.display = 'flex')
}

iconsArrowDown.forEach((item) => item.addEventListener('click', toggleMenu))
