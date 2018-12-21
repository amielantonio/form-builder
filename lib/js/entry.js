import { createContainer } from "./canvas/container";
import { createCanvas } from "./canvas/canvas";

( function ($){

  require( './canvas/container' );
  require( './canvas/canvas' );
  require( './canvas/sidebar' );


  $.fn.formBuilder = function(){

    return $(this).append( createBuilder() );

  };

  //Main function
  function createBuilder(){

    var element = createContainer();
    var canvas = createCanvas();
    // var sortable = createSortableCanvas();
    // var sidebar = createSidebar();
    //
    //
    // element.append( sidebar );
    element.append( canvas );
    //
    // console.log( element );
    return element;


  }









  function prepareCanvas() {
    require( './canvas/canvas_draggable' );
    require( './canvas/canvas_droppable' );
    require( './canvas/canvas_sortable' );
  }



})(jQuery);
