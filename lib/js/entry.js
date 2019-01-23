import { canvasContainer } from "./interface/canvas/canvas";
import { sortableCanvas } from "./interface/canvas/sortable";
import { sidebarContainer } from "./interface/canvas/sidebar";
import { builderContainer } from "./interface/canvas/container";


( function ($){

  $.fn.formBuilder = function(){

    return $(this).append( createBuilder() );

  };

  //Main function
  function createBuilder(){
    let element = builderContainer();
    let canvas = canvasContainer();
    let sortable = sortableCanvas();
    let sidebar = sidebarContainer();

    canvas.append( sortable );
    element.append( sidebar );
    element.append( canvas );

    return element;
  }

})(jQuery);
