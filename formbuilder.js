( function($){

  $( function(){

    prepareCanvas();

    prepareRowElement();

  });

  function prepareCanvas(){
    //Sortable
    $( ".form-builder-canvas .form-builder-pane" ).sortable({
      placeholder: "placeholder",
      opacity: 0.5,
      start: function( event, ui ){
        ui.placeholder.height( ui.helper.outerHeight );
      }
    });

    //Draggable
    $( ".form-builder-tools .form-builder-tool" ).draggable({
      revert: 'invalid',
      opacity: 0.5,
      helper: 'clone',
      cursor: 'grabbing',
      start: function( event, ui ){
        $(this).css( "z-index", 10);
        $(".form-builder-canvas").addClass( "docking" );
      },
      stop: function( event, ui ){
        $(".form-builder-canvas").removeClass( 'docking' );
      }
    });

    //Droppable
    $( ".form-builder-canvas" ).droppable({
      accept: '.form-builder-tool',
      drop: function( event, ui ){
        var element = ui.draggable.data('form-type');

        $( '.form-builder-pane' ).append( detectType(element) );
      }

    });
  }// End Prepare Canvas


  function detectType( formtype ){

    var checker = formtype;
    var element = "";

    switch( formtype ){
      case "textbox":

        element = createTextbox();
        break;
      case "row":
        element = createRow();
        break;
    }

    if( checker !== "row" ){
      return createContainerElement( element );
    }

    if( checker === "row"){
      return element;
    }

  }

  function createContainerElement( formtype ){
    var element =  $( '<div>',{
      class: "form-group"
    });

    element.append(formtype);

    return element;
  }


  function createTextbox(){
    return $( '<input>',{
      class: "form-control"
    })
  }


  function createRow(){

    var element = $( '<div>',{
      class: "row"
    });

    element.append( showRowOptions() );

    return element;
  }


  function showRowOptions(){
    var rowOptions = $( '<div>', {
      class: "row-options"
    });

    rowOptions.append( $( '<button class="btn-row-add"><i class="fas fa-plus"></i></button>' ));

    return rowOptions;
  }




})(jQuery);
