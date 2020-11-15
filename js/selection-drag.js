 // this creates the selected variable
// we are going to store the selected objects in here
var selected = $([]), offset = {top:0, left:0}; 

// initiate the selectable id to be recognized by UI
$("#selectable").selectable({
    filter: 'div',
});

// declare draggable UI and what we are going to be doing on start
$("#selectable div").draggable({
     start: function(ev, ui) {
        selected = $(".ui-selected").each(function() {
           var el = $(this);
            el.data("offset", el.offset());
        });

        if( !$(this).hasClass("ui-selected")) $(this).addClass("ui-selected");
        offset = $(this).offset();
    },
    drag: function(ev, ui) {
        var dt = ui.position.top - offset.top, dl = ui.position.left - offset.left;

        // take all the elements that are selected expect $("this"), which is the element being dragged and loop through each.
        selected.not(this).each(function() {
             // create the variable for we don't need to keep calling $("this")
             // el = current element we are on
             // off = what position was this element at when it was selected, before drag
             var el = $(this), off = el.data("offset");
             el.css({top: off.top + dt, left: off.left + dl});
        });
    }
});