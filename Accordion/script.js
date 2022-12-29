const accordin=document.getElementsByClassName('content-container');
console.log(accordin.classList)

for(i=0; i<accordin.length; i++){

accordin[i].addEventListener('click',function(){
    this.classList.toggle('active');
})

};


