const note_container = document.querySelector(".ntscont");
const createBtn = document.querySelector(".create");
let notes = document.querySelectorAll(".input-box");

function updateStorage()
{
    localStorage.setItem("notes",note_container.innerHTML);
}

function showNotes()
{
    note_container.innerHTML=localStorage.getItem("notes");
}
showNotes();
createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="Image/9165713_folder_delete_document_icon.png";
    note_container.appendChild(inputBox).appendChild(img);
    
})

note_container.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName ==="P")
    {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup =function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event =>{
    if(event.key ==="Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

