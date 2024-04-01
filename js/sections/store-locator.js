// export default  () =>{
//     const storeLocator = document.querySelectorAll('[data-location]');
//     storeLocator.forEach(locator => {
//         locator.addEventListener('click', (e) => {
//             locator.closest('[data-location]').querySelector('.store-locator__location-list').classList.toggle('active')
//             locator.classList.toggle('rotate_arrow')
//         })
       
//     })
//     document.addEventListener('click', (e) => {
//         if(!e.target.closest('[data-location]')){
//             document.querySelector('.store-locator__location-list').classList.remove('active')
//             document.querySelectorAll('[data-location]').forEach(locator => {
//                 locator.classList.remove('rotate_arrow')
//             })
//         }
//     })
// }
  






document.querySelectorAll('[data-dropdown-wrapper]').forEach(dropdown => {
    const dropdownSelect = dropdown?.querySelector('[data-dropdown-select]');
    const caret = dropdown?.querySelector('[data-dropdown-caret]');
    const menu = dropdown?.querySelector('[data-dropdown-menu]');
    const options = menu?.querySelectorAll('[data-dropdown-selector]');
    const selected = dropdownSelect?.querySelector('[data-dropdown-selected]');

    const toggleDropdown = () => {
    dropdownSelect?.classList.toggle('select-clicked');
    caret?.classList.toggle('caret-rotate');
    menu?.classList.toggle('menu-open');
    };

    dropdownSelect?.addEventListener('click', toggleDropdown);

    options.forEach(option => {
        option.addEventListener('click', () => {
            console.log(option.querySelector('[store-name]').innerText, "option");
            selected.innerText = option.querySelector('[store-name]').innerText;
            [dropdownSelect='', caret='', menu=''].forEach(el => el?.classList.remove('select-clicked', 'caret-rotate', 'menu-open'));
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    const handleDropdownContainer = event => {
    if (!dropdown.contains(event.target)) [dropdownSelect, caret, menu].forEach(el => el?.classList.remove('select-clicked', 'caret-rotate', 'menu-open'));
    };

    ['click', 'scroll'].forEach(eventType => document.addEventListener(eventType, handleDropdownContainer));
});