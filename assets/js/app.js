 
 
var $ = jQuery.noConflict();
import './components/posts'
// import menuMobile from  './components/menuMobile'
import modalMarca from  './components/modalMarca'


// function redirectPage(){
//     return window.location.replace('https://feriasdigitales.pe/')
// }
// redirectPage()
 
 
// function activeCategory(){
//     $('.marca-category-filter').on('click',function(e){
//         $('.marca-category-filter').each(function(u) {  
//             $(this).removeClass('marca-category-active')  
//         });  
//         $(this).toggleClass('marca-category-active') 
//     })
// }


jQuery(function ($) {  
    $(document).ready(function () {  
        // menuMobile($)       // Menu Mobile: Show menu and hide   
        modalMarca($)       // Active Modal of marca  
        $('#marca-modal').on('click', function(e){   
            const marcaModalID = e.target.id  
            if(marcaModalID == 'marca-modal' ) {
                $('#marca-modal').removeClass('marca-modal-active')
            } else {
                return;
            } 
           
        })
    });  
});
 
