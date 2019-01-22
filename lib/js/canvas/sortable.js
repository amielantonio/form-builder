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


  return sortable;
}//End Sortable
