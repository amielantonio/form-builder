import { Rows } from "../components/row/row_interface";


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

  let rowPreset = new Rows();

  sortable.append( rowPreset.createPreset() );

  return sortable;
}//End Sortable
