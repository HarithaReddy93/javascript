function addlist(myTable){
var table=document.getElementById(myTable);
// var rowCount=table.rows.length;
var row = table.insertRow(-1);
//Item name
var Iname=document.getElementById("Item_name");
var cell1=row.insertCell(0);
var elem1=document.createElement('input');
elem1.type="text";
elem1.style.width="100%";
elem1.name="ItemName";
elem1.value=Iname;
cell1.appendChild(elem1);

//Item Category
var Icategory=document.getElementById("Item_Category");
var cell2=row.insertcell(1);
var elem2=document.createElement('input');
elem2.type="text";
elem2.style.width="100%";
elem2.name="ItemCategory";
elem2.value=Icategory;
cell2.appendChild(elem2);

//checkbox
var cell4=row.insertCell(3);
var elem4=document.createElement("input");
elem4.type="checkbox";
elem4.name="ckeckbox";
cell4.appendChild(elem4);
document.getElementById('Item_name').value=" ";
document.getElementById('Item_Category').value=" ";

}