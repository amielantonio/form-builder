export function canvasContainer(){
  let canvas = $( '<div>',{
    class: "form-builder-canvas"
  });

  canvas.droppable({
    accept: '.form-builder-tool',
    drop: function( event, ui ){
      let element = ui.draggable.data('html');

      console.log( element );
    }

  });

  return canvas;
}


