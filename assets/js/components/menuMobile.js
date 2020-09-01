let  menuMobile = ($)=>{
    // Shorthand 
    const Id = document.getElementById.bind(document)   
    let mobileNav = Id('mobile-nav-wrap')   
    let navToggle = Id('nav-toggle')   
   $('#nav-toggle').on('click', () => {
        navToggle.classList.toggle('nav-toggle-active')
        mobileNav.classList.toggle('nav-active')  
    }) 
    $('#mobile-menu li:not(.menu-item-has-children)').on('click',()=>{  
            navToggle.classList.toggle('nav-toggle-active')
            mobileNav.classList.toggle('nav-active')        
    })
   $('#mobile-menu li.menu-item-has-children a').on('click',(e)=>{ 
            $('.menu-item-has-children .sub-menu').toggleClass('sub-menu-active')
    })  
}

export default menuMobile
 