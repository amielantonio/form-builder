( function ($){

  $.fn.formBuilder = function(){

    return $(this).append( createBuilder() );

  };

  function createBuilder(){

    var element = createContainer();
    var canvas = createCanvas();
    var sortable = createSortable();
    var sidebar = createSidebar();

    canvas.append( sortable );

    element.append( sidebar );
    element.append( canvas );

    return element;

    function createContainer(){
      return $( '<div>',{
        class: "form-builder-container"
      });
    }

    function createCanvas(){
      return $( '<div>',{
        class: "form-builder-canvas"
      });
    }

    function createSortable(){
      return $( '<div>' , {
        class: "form-builder-sortable"
      });
    }

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
        sidebar.append( element );

      });

      return sidebar;

    }
  }


  function prepareCanvas() {
    require( './canvas/canvas_draggable' );
    require( './canvas/canvas_droppable' );
    require( './canvas/canvas_sortable' );
  }

  function prepareTools(){

  }

  function prepareWidgets(){

  }



})(jQuery);
