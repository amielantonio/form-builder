$( ".form-builder-tool" ).draggable({
  revert: 'invalid',
  opacity: 0.8,
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
