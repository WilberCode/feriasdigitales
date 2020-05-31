 
 
var $ = jQuery.noConflict();
import './components/posts'
import menuMobile from  './components/menuMobile'
import modalMarca from  './components/modalMarca'

   
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
        menuMobile($)       // Menu Mobile: Show menu and hide   
        modalMarca($)       // Active Modal of marca   
    });  
});
 
