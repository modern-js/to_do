document.getElementById('display').addEventListener('submit', toDo);

function toDo(e){
    let siteName = document.getElementById('item').value;

    let item={
        name:siteName,

    };
    
   if(localStorage.getItem('items')=== null){
       let items = [];
       items.push(item);
       localStorage.setItem('items',JSON.stringify(items));
   }else{
       let items = JSON.parse(localStorage.getItem('items'));
       items.push(item);
       localStorage.setItem('items',JSON.stringify(items));
   }
    e.preventDefault();
}



function display_list(){
    let items =JSON.parse(localStorage.getItem('items'));
    let results = document.getElementById('results');
    results.innerHTML = '';
    for(let i =0; i<items.length;i++){
        let name = items[i].name;

    results.innerHTML+= '<div class="well">'+'<h4>'+name+'</h4>'+'</div>';
    }
}