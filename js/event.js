document.getElementById("text").addEventListener('keyup',function(event){
    const text = event.target.value;
    console.log(text);
    const button = document.getElementById('btn-delete');
    if(text === "delete"){
        button.removeAttribute('disabled')
    }else{
        button.setAttribute('disabled',true);
    }
    button.addEventListener('click',function(){
        const hide =document.getElementById('secret');
        hide.style.display = "none"
        const dele = document.getElementById('text')
        dele.value = '';
        
    
       
    })
})