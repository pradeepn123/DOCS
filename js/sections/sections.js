import productForm from "./product-form"

document.addEventListener('DOMContentLoaded', () => {
    productForm();
})

document.addEventListener('quick-view:loaded', () => {
    productForm();
})