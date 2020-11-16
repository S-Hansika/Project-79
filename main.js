var menu_list_array= ["Chicken Tandoori Pizza","Peppy Pepper Pizza","Veg Tandoori Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza","Veg Supreme Pizza"]

function getmenu(){
    var htmldata1;
    htmldata1= "<ol class='menulist'>"
    menu_list_array.sort();
    for (var i=0; i<menu_list_array.length; i++){
        htmldata1= htmldata1+'<li>'+menu_list_array[i]+'</li>';
    }
    htmldata1= htmldata1+'</ol>';
    document.getElementById("display_menu").innerHTML=htmldata1;
}
function add_item(){
    var htmldata;
    var item= document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata= "<section class='cards'>";
    for (var i=0; i<menu_list_array.length; i++){
        htmldata= htmldata+'<div class="card">'+'<img src="pizzaImg.png" alt="">'+ menu_list_array[i] +'</div>';
    }
    htmldata= htmldata+'</section>';
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}