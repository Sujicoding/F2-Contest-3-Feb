var storedItem = localStorage.getItem("storedItem");
function save(){
    var Item= document.getElemenyById("table".value);
    localStorage.setItem("storedItem",item);
    document.getElemenyById("savedtext").innerHTML=item + ="saved";
}
