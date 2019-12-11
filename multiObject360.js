// Using 3 divs(objects) with the object360 Class
// The more images you have on each object
// The smoother the rotation will be! 
var $this;
function rotate_next(){
    $this = $('.object360 img.visible');
    $this.removeClass('visible');
    if($this.is(':last-child')){
        $(".object360 img:first-child").addClass('visible');
    }else{
        $this.next().addClass('visible');
    }
}

function rotate_previous(){
    $this = $('.object360 img.visible');
    $this.removeClass('visible');
    if($this.is(':first-child')){
        $(".object360 img:last-child").addClass('visible');
    }else{
        $this.prev().addClass('visible');
    }
}

//Using TouchSwipe

var swipeOptions=
{
    triggerOnTouchEnd : true,	
    swipeStatus : swipeStatus,
    allowPageScroll:"vertical",
    threshold:75			
}

$(function()
{				
    imgs = $(".object360"); // the element that will be swipeable
    imgs.swipe( swipeOptions );
});

function swipeStatus(event, phase, direction, distance) {
    if(direction == "left") {
    	if(distance%3 == 0) rotate_next();
    }
    else if (direction == "right") {
    	if(distance%3 == 0) rotate_previous();
    }
}