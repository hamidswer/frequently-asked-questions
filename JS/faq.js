const boxes = document.querySelectorAll(".question-box");
class Faq {
    constructor(box){
        this.box = box;
        this.faq();
    }
    faq(){
        this.box.forEach(e=> {
            e.addEventListener("click", ()=> {
            let thisBox=e.classList;
            if (thisBox.contains("active")) {
                thisBox.add("deactive");
                thisBox.remove("active");
                e.childNodes[1].classList.remove("open");
                e.childNodes[1].classList.add("close");
            }
            else {
                e.childNodes[1].classList.add("open");
                e.childNodes[1].classList.remove("close");
                thisBox.remove("deactive");
                thisBox.add("active");
            };
        });
    });}
}

const frequently = new Faq(boxes);





















// boxes.forEach(e=> {
        
// });