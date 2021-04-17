const dropzone = document.querySelectorAll(".dropzone")
const cards = document.querySelectorAll(".card")

function CreateDragAndDrop(cards, dropzone) {
    cards.forEach(item => {
        item.addEventListener("dragstart", ({ target }) => {
            target.classList.add("insideCard")
        }, true)
        // item.addEventListener("drag",({target})=>{          
        // },true)
        item.addEventListener("dragend", ({ target }) => {
            target.classList.remove("insideCard")
        }, true)
    })

    dropzone.forEach(box => {
        box.addEventListener("dragenter", ({ target }) => {
            const insideCard = document.querySelector(".insideCard")
            if (target.classList.contains("dropzone")) {
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

// function addCard() {
//     let newCard = document.createElement('div')
//     console.log(typeof newCard)
//     newCard.classList.add("card")
//     newCard.classList.add("cursor")
//     newCard.setAttribute("draggable", "true")
//     let dropzoneCard = document.querySelector(".dropzone")
//     console.log(typeof newCard)
//     dropzoneCard.appendChild(newCard)
//     let textHTMLCard =
//         `<div style="display:flex;align-items:center; justify-content: space-between;">
//         <span>Item 2</span>
//         <span>
//             <span class="material-icons" style="display:inline-block;font-size: 18px;">launch</span>
//             <span class="material-icons"
//                 style="display:inline-block;font-size: 20px;">delete_outline</span>
//             <span class="material-icons"
//                 style="display:inline-block;font-size: 20px;">drag_indicator</span>
//         </span>
//     </div>`
//     newCard.innerHTML = textHTMLCard
// }
// addCard()
CreateDragAndDrop(cards, dropzone)





