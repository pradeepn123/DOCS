export default  () =>{
    const storeLocator = document.querySelectorAll('[data-location]');
    storeLocator.forEach(locator => {
        locator.addEventListener('click', (e) => {
            locator.closest('[data-location]').querySelector('.store-locator__location-list').classList.toggle('active')
            locator.classList.toggle('rotate_arrow')
        })
       
    })
    document.addEventListener('click', (e) => {
        if(!e.target.closest('[data-location]')){
            document.querySelector('.store-locator__location-list').classList.remove('active')
            document.querySelectorAll('[data-location]').forEach(locator => {
                locator.classList.remove('rotate_arrow')
            })
        }
    })
}
  

