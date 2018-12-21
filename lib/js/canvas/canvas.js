function createSortableCanvas(){
  return $( '<div>' , {
    class: "form-builder-sortable"
  });
}//End Sortable

export function createCanvas(){
  let canvas =  $( '<div>',{
    class: "form-builder-canvas"
  });

  return canvas.append(createSortableCanvas());
}


