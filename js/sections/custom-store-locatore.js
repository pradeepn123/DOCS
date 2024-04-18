import reactWrapper from "JsComponents/reactWrapper";
import storeLocator from "JsComponents/store-locator";

export default () => {
    reactWrapper(storeLocator, 'store-locator', '#storeLocator-data');
}