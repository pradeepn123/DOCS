
export default  () =>{
    document.querySelectorAll('[data-dropdown-wrapper]').forEach(dropdown => {
    const dropdownSelect = dropdown?.querySelector('[data-dropdown-select]');
        const caret = dropdown?.querySelector('[data-dropdown-caret]');
        const menu = dropdown?.querySelector('[data-dropdown-menu]');
        const toggleDropdown = () => {
        dropdownSelect?.classList.toggle('select-clicked');
        caret?.classList.toggle('caret-rotate');
        menu?.classList.toggle('menu-open');
        };
        dropdownSelect?.addEventListener('click', toggleDropdown);

        const handleDropdownContainer = event => {
        if (!dropdown.contains(event.target)) [dropdownSelect, caret, menu].forEach(el => el?.classList.remove('select-clicked', 'caret-rotate', 'menu-open'));
        };

        ['click', 'scroll'].forEach(eventType => document.addEventListener(eventType, handleDropdownContainer));
    });
}