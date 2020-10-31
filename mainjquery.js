$(document).ready(function(){

const AddTaskInput=$("#AddTaskInput");
//array of all current delete buttons (that exist before user enter new ones)
let rmvBtns=$(".rmvBtn");
//array of all edit buttons (that exist before user enter new ones)
let editbtns=$(".editbtn");
//array of all checkboxes (that exist before user enter new ones)
let CheckInputs=$(".form-check-input");

let readonly=true;
//handel click event on addTask button
$("#AddButton").click(function(){
    //make sure that there is a task to add
  if(AddTaskInput.val()!="")
  {
//build form group item

    //form-group
let toDoformGroup=$(`<div class="form-group"></div>`)
//form-check
let toDoFormCheck=$(`<div class="form-check"></div>`) 
//checkbox               
let toDocheckBox = $(`<input class="form-check-input mt-3" type="checkbox" >`).change(function(){
    $(this).next().css("text-decoration","line-through");
  });
  //todo task
let toDoTxtInput= `<input type="text" class="form-control todo" value=`+AddTaskInput.val()+`  readonly=`+readonly+` >`
//edit button
let toDoEdit    = $(`<a  class="editbtn " href="#" ><span class="far fa-edit fa-xs "></span></a>`).click(function(){
    //enable editing and display border-bottom after click edit button , disable editing and hide border-bottom after click again
    let readabilty=$(this).prev().attr('readonly')
    $(this).prev().attr('readonly', !readabilty);
    readabilty=!readabilty;
    if(readabilty==false)
    $(this).prev()[0].style.borderBottom = "1px solid black";
    else
    $(this).prev().css("border" , "none");
    
});
//delete button
let toDoDel=   $(`<a  class="rmvBtn"  href="#" > <i class="far fa-trash-alt fa-xs"></i></a>`).click(function(){
    $(this).parent().parent().remove();
});



toDoFormCheck.append(toDocheckBox,toDoTxtInput,toDoEdit,toDoDel);
toDoformGroup.append(toDoFormCheck);
$("#form1").append(toDoformGroup);
AddTaskInput.val("");
     
}
  
});
//handle events for existing tasks (that exist before user enter new ones)
for(let i=0;i<CheckInputs.length;i++)
{
    $(CheckInputs[i]).change(function(){
        if(CheckInputs[i].checked)
      $(CheckInputs[i]).next().css("text-decoration","line-through");
      else
      $(CheckInputs[i]).next().css("text-decoration","none");
    });
}
for(let i=0;i<rmvBtns.length;i++)
{
    $(rmvBtns[i]).click(function(){
        $(rmvBtns[i]).parent().parent().remove();
    });

}
for(let i=0;i<editbtns.length;i++)
{
     //enable editing and display border-bottom after click edit button , disable editing and hide border-bottom after click again
    $(editbtns[i]).click(function(){
        let readabilty=$(this).prev().attr('readonly')
        $(editbtns[i]).prev().attr('readonly', !readabilty);
        readabilty=!readabilty;
        if(readabilty==false)
        $(editbtns[i]).prev()[0].style.borderBottom = "1px solid black";
        else
        $(editbtns[i]).prev().css("border" , "none");
        
    });
}

});