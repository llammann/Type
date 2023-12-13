// console.log("hi")

// let form=document.querySelector(".form")
// let input: HTMLInputElement | null =document.querySelector(".input")
// // let input=document.querySelector<HTMLInputElement>(".input")

// let button: HTMLButtonElement | null=document.querySelector(".button")!

// let ul:HTMLUListElement | null=document.querySelector(".todos")!

// let todosArr :string[]=[]
// form?.addEventListener("submit",function addTodo(e) {
//     e.preventDefault()

//     showtodos(input?.value,todosArr)
//     input?.value=""

//     console.log(todosArr)
// ul?.innerHTML=""
//     todosArr.forEach(todo=>{
//         ul?.innerHTML+=`
//         <li>
//             ${todo}
//         </li>
//         `
//     })
// }
// )

// function showtodos(todo:string,todos:string[]):string[] {
// todos.push(todo)
// return todos
// }




console.log("hi")

let form=document.querySelector(".form")
let input=document.querySelector<HTMLInputElement>(".input")! 

// let button=document.querySelector<HTMLButtonElement>(".button")! 

let ul=document.querySelector<HTMLUListElement>(".todos")! 

let todosArr :string[]=[]
form?.addEventListener("submit",function addTodo(e) {
    e.preventDefault()

    showtodos(input?.value,todosArr)
    input.value=""

    console.log(todosArr)
ul.innerHTML=""
    todosArr.forEach(todo=>{
        ul.innerHTML+=`
        <li>
            ${todo}
        </li>
        `
    })
}
)

function showtodos(todo:string,todos:string[]):string[] {
todos.push(todo)
return todos
}


