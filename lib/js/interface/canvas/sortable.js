import { rowInterface } from "../components/row/row_interface";


export function sortableCanvas(){

  let sortable = $( '<div>' , {
    class: "form-builder-sortable"
  });

  sortable.sortable({
    placeholder: "item-highlight-sorting",
    opacity: 0.8,
    start: function(){

    }
  });

  sortable.append( rowInterface() );


  return sortable;
}//End Sortable
