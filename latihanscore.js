let item1=document.getElementById('item1')
let item2=document.getElementById('item2')
let inputValue=document.querySelector('#selection')

let count1=0;
let count2=0;
let gameover=false
let maxwin;
inputValue.addEventListener('change',function(){
    maxwin=inputValue.value
    console.log(maxwin)
 buttonReset()   
})

document.getElementById('plus1').addEventListener('click',function(){
    if(!gameover){
        count1+=1
        if(count1==maxwin){
            gameover=true
        }
        item1.textContent=count1
    }

   
})
document.getElementById('plus2').addEventListener('click',function(){
    if(!gameover){
        count2+=1
         if(count2==maxwin){
            gameover=true
        } 
    item2.textContent=count2
    }
})

document.querySelector('.reset').addEventListener('click',buttonReset)

function buttonReset(){
    gameover=false
    count1=0
    count2=0
    item1.innerHTML=0
    item2.innerHTML=0
}
