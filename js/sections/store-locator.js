export default  () =>{
    const storeLocator = document.querySelectorAll('[data-location]');
    storeLocator.forEach(locator => {
        locator.addEventListener('click', (e) => {
            locator.closest('[data-location]').querySelector('.store-locator__location-list').classList.toggle('active')
            locator.classList.toggle('rotate_arrow')
        })
    })
}
  

