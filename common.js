// This class will handle events making use of JQuery
export class EventManager{
    
    // add an event listener for a given element (selector)
    addListener(event, selector, fn){
        $(document).on(event, selector,  fn);
    }

    // fire an event on a given element (selector)
    fireEvent(event, selector){
        $(selector).trigger(event);
    }
}