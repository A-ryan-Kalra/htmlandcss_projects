const header=document.getElementById('header')
const title=document.getElementById('title')
const profile_img=document.getElementById('profile_img')
const nameE=document.getElementById('name')
const excerpt=document.getElementById('excerpt')
const date=document.getElementById('date')

const animated_bgs=document.querySelectorAll('.animated-bg')
const animated_bg_texts=document.querySelectorAll('animated-bg-text')

 setTimeout(getData,2500)

function getData(){
    header.innerHTML=`<img src="https://images8.alphacoders.com/956/956694.jpg" style="object-fit:cover"  alt="">`
    title.innerHTML=`Lorem ipsum dolor sit amet.`
    profile_img.innerHTML=` <img  src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    nameE.innerHTML=`John Doe`
    excerpt.innerHTML=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque voluptatibus aut consequuntur minima obcaecati placeat nam eveniet exercitationem animi est at illo deleniti fugiat suscipit magnam, laboriosam a in.`
    date.innerHTML=`Dec 04, 2022`
    
    animated_bgs.forEach(bg=>bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg=>bg.classList.remove('animate-bg-text'))
}