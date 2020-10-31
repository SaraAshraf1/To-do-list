const AddButton=document.getElementById("AddButton");
const form1=document.getElementById("form1");
const AddTaskInput=document.getElementById("AddTaskInput")
//array of all current delete buttons (that exist before user enter new ones)
const deletebtns=$('.rmvBtn');
//array of all edit buttons (that exist before user enter new ones)
const editbtns=$('.editbtn');
//array of all checkboxes (that exist before user enter new ones)
const ToDockeckBoxes=document.getElementsByClassName("form-check-input");
let readonly=true;

//handel click event on addTask button
AddButton.addEventListener('click',function(){
  //make sure that there is a task to add
  if(AddTaskInput.value!="")
  {
    //build form group item

    //form-group
  const formGroup=document.createElement('div');
  formGroup.classList.add("form-group");
//form-check
  const formCheck=document.createElement('div');
  formCheck.classList.add("form-check");
//checkbox
  const toDocheckBox=document.createElement('input');
  toDocheckBox.classList.add("form-check-input" ,"mt-3");
  toDocheckBox.type="checkbox";

  toDocheckBox.addEventListener('change',function(){
    toDocheckBox.parentElement.getElementsByClassName("todo")[0].style.textDecoration="line-through";
  });

  //todo task
  const todo=document.createElement('input');
  todo.classList.add("form-control","todo");
  todo.type="text";
  todo.readOnly=true;
  todo.value=AddTaskInput.value;
  
  //delete botton
  const deleteBtn=document.createElement('a');
  deleteBtn.classList.add("rmvBtn");
  deleteBtn.href="#";

  const deleteIcon=document.createElement('i');
  deleteIcon.classList.add("far", "fa-trash-alt", "fa-xs");

  deleteBtn.appendChild(deleteIcon);

  deleteBtn.addEventListener('click',function(){
    deleteBtn.parentElement.parentElement.remove();
});

//edit button
  const editBtn=document.createElement('a');
  editBtn.href="#";
  editBtn.classList.add("editBtn");

  const editIcon=document.createElement('i');
  editIcon.classList.add("far", "fa-edit", "fa-xs");

  editBtn.appendChild(editIcon);

       //enable editing and display border-bottom after click edit button , disable editing and hide border-bottom after click again
editBtn.addEventListener('click',function(){
  let readabilty=editBtn.parentElement.getElementsByClassName("todo")[0].readOnly;
    editBtn.parentElement.getElementsByClassName("todo")[0].readOnly=!readabilty;
    readabilty=!readabilty;
    if(readabilty==false)
    editBtn.parentElement.getElementsByClassName("todo")[0].style.borderBottom = "1px solid black";
    else
    editBtn.parentElement.getElementsByClassName("todo")[0].style.border = "none";
});

  formCheck.appendChild(toDocheckBox);
  formCheck.appendChild(todo);
  formCheck.appendChild(editBtn);
  formCheck.appendChild(deleteBtn);
 

  formGroup.appendChild(formCheck);
  form1.appendChild(formGroup);
  //empty the addTask input
  AddTaskInput.value="";


}
  
});
//handle events for existing tasks (that exist before user enter new ones)
for(let i=0;i<ToDockeckBoxes.length;i++)
{
    ToDockeckBoxes[i].addEventListener('change',function(){
        ToDockeckBoxes[i].parentElement.getElementsByClassName("todo")[0].style.textDecoration="line-through";
    });
}
for(let i=0;i<deletebtns.length;i++)
{
    deletebtns[i].addEventListener('click',function(){
        deletebtns[i].parentElement.parentElement.remove();
    });
}
for(let i=0;i<editbtns.length;i++)
{
   //enable editing and display border-bottom after click edit button , disable editing and hide border-bottom after click again
    editbtns[i].addEventListener('click',function(){
     
      let readabilty=editbtns[i].parentElement.getElementsByClassName("todo")[0].readOnly;
        editbtns[i].parentElement.getElementsByClassName("todo")[0].readOnly=!readabilty;
        readabilty=!readabilty;
        if(readabilty==false)
        editbtns[i].parentElement.getElementsByClassName("todo")[0].style.borderBottom = "1px solid black";
        else
        editbtns[i].parentElement.getElementsByClassName("todo")[0].style.border = "none";
        
    });
}