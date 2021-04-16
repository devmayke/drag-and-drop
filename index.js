  const dropzone = document.querySelectorAll(".dropzone")
  const cards= document.querySelectorAll(".card")

  function CreateDragAndDrop(cards, dropzone){
    cards.forEach(item=>{
        item.addEventListener("dragstart",({target})=>{
            target.classList.add("insideCard")                
        },true)
        // item.addEventListener("drag",({target})=>{          
        // },true)
        item.addEventListener("dragend",({target})=>{     
            target.classList.remove("insideCard")  
        },true)         
    })

    dropzone.forEach(box=>{        
        box.addEventListener("dragenter",({target})=>{             
            const insideCard = document.querySelector(".insideCard")           
            if(target.classList.contains("dropzone")){                
                target.appendChild(insideCard)                       
            }
    }) 
        // box.addEventListener("dragover",(e)=>{
        //     e.preventDefault()      
        // }, true)          
        // box.addEventListener("dragleave",(e)=>{          
        // })
        // box.addEventListener("drop",(e)=>{            
        // })   
    })
}
CreateDragAndDrop(cards, dropzone)
// function addCard(){
//     let externalDiv = document.createElement("div")
//     externalDiv.classList.add("card")
//     externalDiv.setAttribute("draggable", "true")
//     let card = `<div style="display:flex;align-items:center; justify-content: space-between;">
//         <span>Item 1</span>
//         <span>
//             <span class="material-icons" style="display:inline-block;font-size: 18px;">launch</span>
//             <span class="material-icons" style="display:inline-block;font-size: 20px;">delete_outline</span>
//             <span class="material-icons" style="display:inline-block;font-size: 20px;">drag_indicator</span>
//         </span>
//     </div>`   
//     externalDiv.innerHTML = card
//     let finalCard =  document.querySelector(".dropzone")
//     finalCard.appendChild(externalDiv)   
// }



