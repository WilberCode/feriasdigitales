 
// import './materialize/materialize.min.js'

 
var $ = jQuery.noConflict();
import './components/posts'
import modalMarca from  './components/modalMarca'
// Shorthand 
const Id = document.getElementById.bind(document)
const className = document.getElementsByClassName.bind(document)
const tagName = document.getElementsByTagName.bind(document)



function menuMobile(){  
    let mobileNav = Id('mobile-nav-wrap')   
    let navToggle = Id('nav-toggle')   
   $('#nav-toggle').on('click', () => {
        navToggle.classList.toggle('nav-toggle-active')
        mobileNav.classList.toggle('nav-active')  
    }) 
    $('#mobile-menu li').on('click',()=>{ 
        navToggle.classList.toggle('nav-toggle-active')
        mobileNav.classList.toggle('nav-active')  
    })
}
 
function separateFirstText(){
    $('.card__title').each(function() { 
        var text = this.innerHTML;
        var firstSpaceIndex = text.indexOf(" "); 
        if (firstSpaceIndex > 0) {  
            var substrBefore = text.substring(0,firstSpaceIndex);
            var substrAfter = text.substring(firstSpaceIndex, text.length) 
            var newText = '<span class="card-category">' + substrBefore + '</span>' + substrAfter;
            this.innerHTML = newText;
        } else {
            this.innerHTML = '<span class="card-category">' + text + '</span>';
        }
    }); 
}
 
function showVideos(){
    $('.show-videos').click(()=>{
        $('.vimeography-theme-harvestone').toggleClass('show-video') 
    })
} 
 
function activeCategory(){
    $('.marca-category-filter').on('click',function(e){
        $('.marca-category-filter').each(function(u) {  
            $(this).removeClass('marca-category-active')  
        });  
        $(this).toggleClass('marca-category-active') 
    })
}
 
jQuery(function ($) {  
    $(document).ready(function () {  
        menuMobile()        // Menu Mobile: Show menu and hide 
        separateFirstText() // Card title: serate the first word in a span 
        showVideos()        // Button show the videos
        activeCategory()    // Active color of categories
        modalMarca($)       // Active Modal of marca 
        
        // $('#marca-modal').on('click', function(e){  
        //     const parentID = e.target.parentNode.id 
        //     console.log(parentID )
        //     console.log($(this) )
        //      if (parentID !== 'marca-modal-body' && e.target.id !== 'marca-modal-body' ) {
        //         $('#marca-modal').removeClass('marca-modal-active')
        //     } else {
        //         return;
        //     }
           
        // })
    });  
});
 
