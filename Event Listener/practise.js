const revealBtn=document.querySelector(".reveal-btn");
const hiddenContent=document.querySelector(".hidden-content");

function revealContent(){
    if(hiddenContent.classList.contains("reveal-btn")){
        hiddenContent.classList.remove("reveal-btn")
    }else{
        hiddenContent.classList.add("reveal-btn")
        console.log(hiddenContent.classList)
    }
}
revealBtn.addEventListener('click',revealContent);
console.log(revealBtn)
 