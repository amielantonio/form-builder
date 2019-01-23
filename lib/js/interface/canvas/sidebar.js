function createWidgets(){
  let widgets = require( '../../widgets/common.json' );

  let sidebarWidgets = $( "<div></div>" );

  Object.keys( widgets ).forEach(function(k){

    let icon = $( '<i>', {
      class: widgets[k]['icon'] + " fa-lg"
    });

    let element = $( '<a>',{
      class: "form-builder-tool",
      "data-build-type": k,
      "data-html": widgets[k]['html'],
      "data-build-options": widgets[k]['options']
    }).html( widgets[k]['name'] );

    element.prepend( icon );
    element.draggable({
      revert: 'invalid',
      opacity: 0.75,
      helper: 'clone',
      cursor: 'grab',
      cursorAt: {},
      start: function(){
        $(this).css( 'z-index', 500);
        $( '.form-builder-canvas' ).addClass( 'docking' );
      },
      stop: function(){
        $( '.form-builder-canvas' ).removeClass( 'docking' );
      }
    });

    sidebarWidgets.append( element );

  });

  return sidebarWidgets;

}

export function sidebarContainer(){
  let sidebar = $( "<div>", {
    class: "form-builder-sidebar"
  });

  let elements = createWidgets();

  sidebar.append( elements.children() );

  return sidebar;

}//End sidebar
