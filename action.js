function clockwise(){
    let quadrant = parseInt(document.getElementById("smallrect").getAttribute("quadrant"))%4;
    increaseQuadrant = parseInt(parseInt(quadrant)+parseInt(1))%4;
    changeQuadrant(quadrant,increaseQuadrant);
}
function anticlockwise(){
    let quadrant = parseInt(document.getElementById("smallrect").getAttribute("quadrant"))%4;
    decreaseQuadrant = parseInt(parseInt(quadrant)+parseInt(3))%4;
    changeQuadrant(quadrant,decreaseQuadrant);
}
function changeQuadrant(quadrant,changeQuadrant){
    document.getElementById("smallrect").classList.remove("position"+quadrant);
    document.getElementById("smallrect").classList.add("position"+ changeQuadrant);
    document.getElementById("smallrect").setAttribute("quadrant", changeQuadrant);
}