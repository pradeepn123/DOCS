import reactWrapper from "JsComponents/reactWrapper";
import storeLocator from "ReactComponents/store-locator";

export default () => {
    reactWrapper(storeLocator, 'store-locator', '#storeLocator-data');
}