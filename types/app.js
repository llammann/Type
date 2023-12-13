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
console.log("hi");
var form = document.querySelector(".form");
var input = document.querySelector(".input");
var button = document.querySelector(".button");
var ul = document.querySelector(".todos");
var todosArr = [];
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function addTodo(e) {
    e.preventDefault();
    showtodos(input === null || input === void 0 ? void 0 : input.value, todosArr);
    input.value = "";
    console.log(todosArr);
    ul.innerHTML = "";
    todosArr.forEach(function (todo) {
        ul.innerHTML += "\n        <li>\n            ".concat(todo, "\n        </li>\n        ");
    });
});
function showtodos(todo, todos) {
    todos.push(todo);
    return todos;
}
