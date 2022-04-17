     function Get(){
        var x = confirm("do you want to change the background ?");

        if (x) {
    
    
            document.body.style.backgroundColor = 'black';
        }
         else{
                 document.body.style.backgroundColor="white";
         }
         
        
        
        
        
        
    
    }
    

    let age=prompt("enter your age:")
     if(age<18){
      alert("your age than small 18");
    }
    else{
    alert("you are older")
    }