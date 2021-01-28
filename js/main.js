document.addEventListener('DOMContentLoaded', function(){
    let imgH = document.querySelectorAll('.img-fluid');
    
    console.log(imgH[2].scrollTop);
    
    
    window.addEventListener('scroll', function(){

        
        let alreadyScrolled = window.pageYOffset;
        console.log(alreadyScrolled);

        for (let i=0; i<imgH.length;i++){

        
            let elementH = imgH[i].offsetHeight;
            console.log(elementH);

            let topImg=  imgH[i].getBoundingClientRect();
            console.log(topImg);

            if (alreadyScrolled > (topImg.y + (elementH/2)) ){
                imgH[i].classList.add('revealed');

            
            
            }

        
        }
   

    })

    

    




    
 })