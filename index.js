// const answer = document.getElementsByClassName("para");
const question = document.getElementsByClassName("title");

for (let i = 0; i < question.length; i++ ) {
    question[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let active = this.addEventListener.nextElementSibling;
        let para = this.nextElementSibling;
        if(para.style.display === "block"){
            para.style.display = "none";
        } else {
            para.style.display = "block";
        }
    });
}





// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }


