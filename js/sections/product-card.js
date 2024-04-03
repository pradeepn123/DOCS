import reactWrapper from "JsComponents/reactWrapper";
import ProductCard from "ReactComponents/product-card";

export default () => {
    reactWrapper(ProductCard, 'product-card', '#product-card-data');
}