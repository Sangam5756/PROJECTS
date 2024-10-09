let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');


btn.addEventListener("click", function () {

    let newbtn = document.createElement('button');
    newbtn.innerText = "Delete";
    newbtn.classList.add("delete");

    let item = document.createElement('li');
    item.innerText = inp.value;

    if (item.innerText != "") {
        item.appendChild(newbtn);
        ul.appendChild(item);
        inp.value = "";
    } else {
        alert("field is blank");
    }


});

ul.addEventListener("click", function () {
    if (event.target.nodeName == "BUTTON") {
        let par = event.target.parentElement;
        par.remove();
    }
    // console.log("Button clicked!");
})



// let btns = document.querySelectorAll(".delete");

// for( del of btns){
//     del.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }
