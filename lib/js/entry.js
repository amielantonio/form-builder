import { canvasContainer } from "./canvas/canvas";
import { sortableCanvas } from "./canvas/sortable";
import { sidebarContainer } from "./canvas/sidebar";
import { builderContainer } from "./canvas/container";

import { rowInterface } from "./interface/components/row/row_interface";

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

    let rowCreator = rowInterface();

    sortable.append( rowCreator );
    canvas.append( sortable );
    element.append( sidebar );
    element.append( canvas );

    return element;
  }

})(jQuery);
