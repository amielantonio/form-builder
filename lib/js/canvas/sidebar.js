function createSidebar(){
  var sidebar = $( "<div>", {
    class: "form-builder-sidebar"
  });

  var widgets = {
    "row": {
      "html": "div",
      "name": "Row",
      "options": "row",
      'icon': "fas fa-th-large"
    },
    "textbox": {
      "html": "input",
      "name": "Textbox",
      "options": "text",
      'icon': "fas fa-font"
    },
    "email": {
      "html": "input",
      "name": "Email",
      "options": "text",
      'icon': "far fa-envelope"
    },
    "radio": {
      "html": "input",
      "name": "Radio",
      "options": "choices",
      'icon': "far fa-check-circle"
    },
    "checkbox": {
      "html": "input",
      "name": "Checkbox",
      "options": "choices",
      'icon': "far fa-check-square"
    },
    "date": {
      "html": "input",
      "name": "Date",
      "options": "date",
      'icon': "far fa-calendar-alt"
    },
    "password": {
      "html": "input",
      "name": "Password",
      "options": "text",
      'icon': "fas fa-lock"
    },
    "hidden": {
      "html": "input",
      "name": "Hidden",
      "options": "hidden",
      'icon': "fas fa-font"
    },
    "file": {
      "html": "input",
      "name": "file",
      "options": "file",
      'icon': "fas fa-file-upload"
    },
    "num": {
      "html": "input",
      "name": "Number",
      "options": "text",
      'icon': "fas fa-sort-numeric-up"
    },
    "tel": {
      "html": "input",
      "name": "Telephone",
      "options": "text",
      'icon': "fas fa-phone"
    },
    "select": {
      "html": "select",
      "name": "Dropdown",
      "options": "dropdown",
      'icon': "far fa-caret-square-down"
    },
    "textarea": {
      "html": "textarea",
      "name": "Textbox",
      "options": "text",
      'icon': "far fa-file-alt"
    },
    "button": {
      "html": "button",
      "name": "Button",
      "options": "button",
      'icon': "far fa-hand-point-up"
    },
    "paragraph": {
      "html": "p",
      "name": "Textbox",
      "options": "paragraph",
      'icon': "fas fa-paragraph"
    }
  };

  Object.keys( widgets ).forEach(function(k){

    var icon = $( '<i>', {
      class: widgets[k]['icon'] + " fa-lg"
    });
    var element = $( '<a>',{
      class: "form-builder-tool",
      "data-build-type": k,
      "data-html": widgets[k]['html'],
      "data-build-options": widgets[k]['options']
    }).html( widgets[k]['name'] );

    element.prepend( icon );
    element.draggable({
      revert: 'invalid',
      opacity: 1,
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

    sidebar.append( element );

  });

  return sidebar;

}//End sidebar


function createWidgets(){

}
