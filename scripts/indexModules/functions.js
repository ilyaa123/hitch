export const headerMobile = (button, nav) => {
    button.addEventListener('click', () => {
        button.classList.toggle('header__button-moble-acive');
        nav.classList.toggle('catalog__mobile-active')
    })
}
export const headerCatalog = (button, catalog) => {
    button.addEventListener('click', () => {
        button.classList.toggle('header__input-btn-acive');
        catalog.classList.toggle('catalog-active')
    })
}
export const scrollToLinks = (links) => {

    for (let link of links) {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        
        const blockID = link.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
}