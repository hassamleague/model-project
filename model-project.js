let bg = document.getElementById('bg')
let main = document.getElementById('main')
let mark = document.getElementById('mark')
let btn = document.getElementById('btn')
let main2 = document.getElementById('main2')

btn.addEventListener('click',()=>{

 bg.classList.add('bg1')   
 main.classList.add('main1')   
 main2.style.display='block'
 btn.style.display='none'
 
})

mark.addEventListener('click',()=>{
    main2.style.display='none'
    bg.classList.remove('bg1')   
    main.classList.remove('main1')   
 btn.style.display='block'
   
   })