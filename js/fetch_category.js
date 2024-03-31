const content = document.querySelector('.content')


function sofa_category(){
    
   let xhr = new XMLHttpRequest()


   xhr.open("GET","sofa.html",true)

   xhr.onload = ()=>{

    if(xhr.status == 200 && XMLHttpRequest.DONE){
        let data = xhr.responseText

        content.innerHTML=data
        console.log(data);
    }
   }
   xhr.send();
}


function bed_category(){
    
    let xhr = new XMLHttpRequest()
 
 
    xhr.open("GET","bed.html",true)
 
    xhr.onload = ()=>{
 
     if(xhr.status == 200 && XMLHttpRequest.DONE){
         let data = xhr.responseText
 
         content.innerHTML=data
     }
    }
    xhr.send();
 }

 function chair_category(){
    
    let xhr = new XMLHttpRequest()
 
 
    xhr.open("GET","chair.html",true)
 
    xhr.onload = ()=>{
 
     if(xhr.status == 200 && XMLHttpRequest.DONE){
         let data = xhr.responseText
 
         content.innerHTML=data
     }
    }
    xhr.send();
 }

 function table_category(){
    
    let xhr = new XMLHttpRequest()
 
 
    xhr.open("GET","table.html",true)
 
    xhr.onload = ()=>{
 
     if(xhr.status == 200 && XMLHttpRequest.DONE){
         let data = xhr.responseText
 
         content.innerHTML=data
     }
    }
    xhr.send();
 }

 function dinning_category(){
    
    let xhr = new XMLHttpRequest()
 
 
    xhr.open("GET","dinning chair.html",true)
 
    xhr.onload = ()=>{
 
     if(xhr.status == 200 && XMLHttpRequest.DONE){
         let data = xhr.responseText
 
         content.innerHTML=data
     }
    }
    xhr.send();
 }