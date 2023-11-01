let lis = document.querySelectorAll(".switcher li");
let box = document.querySelectorAll(".row .box");
let link = document.querySelectorAll(".navbar li");



lis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});


// Remove  Active claa from all li 

function removeActive() {
    lis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active")
    });
};




// Manage imgs 

function manageImgs() {
    box.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) =>{
        el.style.display = "block";
    })
}





// navbar click 

link.forEach((a) => {
    a.addEventListener("click", addActive);
});

function addActive() {

    console.log("click")
    link.forEach((a) => {
        a.classList.remove("active");
        this.classList.add("active")
        console.log(active)
    });
};