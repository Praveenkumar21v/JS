//creating
document.querySelector('#submit').onclick = function(){
        document.querySelector('#tasks').innerHTML += 
        `<div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span> 
            <button class='delete'>
            <i class="far fa-trash-alt"></i>
            </button>
        </div>`

        //delete
var toDoTask=document.querySelectorAll('.delete');
for(i=0;i<toDoTask.length;i++){
    toDoTask[i].onclick=function(){
        this.parentNode.remove()
    }
}
}
