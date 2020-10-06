
var taskInput= getElementById('new_task');//Add new Task
var addButton= getElementsByTagName('button')[1]; //Add item Button

//New task table cell item
var createNewTaskElement=function(taskString){
var table=document.getElementById("Incomplete_Task"); //table of incomplete-tasks //incompletetaskholder
var row=table.insertRow(-1);
var cell1=row.insertCell(0);
var cell2=row.insertCell(1);
var cell3=row.insertCell(2);
var cell4=row.insertCell(3);
cell1.innerHTML="Item name";
cell2.innerHTML="Item Category";
cell3.innerHTML="Date1";
cell4.innerHTML=document.createElement("input");//checkbx
	
	//button.edit
	var editButton=document.createElement("button");//edit button

	//button.delete
	var deleteButton=document.createElement("button");//delete button

	label.innerText=taskString;

	//Each elements, needs appending
	cell4.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";



	//and appending.
	table.appendChild(checkBox);
	table.appendChild(label);
	table.appendChild(editInput);
	table.appendChild(editButton);
	table.appendChild(deleteButton);
	return listItem;
}
