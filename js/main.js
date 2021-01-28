document.addEventListener('DOMContentLoaded', function(){
    let imgH = document.querySelectorAll('.img-fluid');
    console.log(imgH[1]);
    
    

    
    window.addEventListener('scroll', function(){

        let test=0;
        let alreadyScrolled = window.pageYOffset;
        console.log(alreadyScrolled);

        for (let i=0; i<imgH.length;i++){

        
        let elementH = imgH[i].offsetHeight;
        console.log(elementH);
        
        


        if (alreadyScrolled > (test + elementH) ){
            imgH[i].classList.add('revealed');

          
           
        }

        
    }
   

})

    

    




    
 })