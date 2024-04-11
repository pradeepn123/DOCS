export default () => {
    const atcTrigger = document.querySelector('[data-atc-trigger');
    if(atcTrigger){
        atcTrigger.addEventListener('change', handleAtcTrigger);
    }
}

function handleAtcTrigger (){
    const addTocCart = document.querySelector('[data-atc]');
    if( !addTocCart) return;
    console.log("this",this.checked)
    if(this.checked == true){
        if(addTocCart.disabled) {
            addTocCart.disabled = false
        }
    }

}