<?php get_template_part( 'templates/partials/document-open' ); ?> 
<!-- Site header markup goes here --> 

<?php if(!is_page('como-participar')){?>
<header class=" bg-white header">
    <div class="bg-black h-8 sm:h-16 w-full relative z-40" >    
    </div>
    <div class="header-wrap container m-auto flex h-14  sm:h-24 justify-between items-center "> 
        <div class=" flex relative z-40 ">
            <a href="https://www.instagram.com/feriasdigitales/"  class=" no-underline mr-4 " > <svg class=" text-primary-500 fill-current  w-6 h-6 "><use href="<?php echo get_bloginfo('template_directory').'/build/svg/icons.svg#instagrams'; ?>"></svg> </a>
            <a href="https://www.facebook.com/feriasdigitales/"  class=" no-underline " > <svg class="text-primary-500 fill-current  w-6 h-6 "><use href="<?php echo get_bloginfo('template_directory').'/build/svg/icons.svg#facebooks'; ?>"></svg> </a>
         </div>
         <div class=" items-center md:h-full " >
         <?php if(is_page('1ra-feria-digital-mama')){?>
                    <nav class="header-nav" >
                        <ul class="header-menu">
                            <li><a href="<?php echo home_url(); ?>" class="hidden md:block" >Feria Digital Junio 2020</a></li>
                        </ul>
                    </nav> 
                <?php } else{ ?> 
             <?php  
                wp_nav_menu(array(
                    'theme_location'  => 'main',
                    'container'       => 'nav',
                    'container_class' => 'header-nav',   
                    'container_id'    => 'header-nav',  
                    'menu' => 'ul',
                    'menu_class'      => 'header-menu',
                    'menu_id'         => 'header-menu',
                ));  
             } ?>
                
                <div class="mobile-nav-wrap" id="mobile-nav-wrap"  > 
                    <?php  
                    wp_nav_menu(array(
                        'theme_location'  => 'mobile',
                        'container'       => 'nav',
                        'container_class' => 'mobile-nav',
                        'container_id'    => 'mobile-nav',  
                        'menu' => 'ul',
                        'menu_class'      => 'mobile-menu',
                        'menu_id'         => 'mobile-menu' ,
                    ));  
                ?> 
                </div>
                <div class="nav-toggle-wrap block md:hidden ">
                    <button  id="nav-toggle" class="nav-toggle focus:outline-none border-none">  
                        <span ></span> 
                        <span ></span> 
                        <span ></span> 
                        <span ></span> 
                        <span ></span> 
                        <span ></span>  
                    </button>
                </div>   
            </div>
     </div> 
</header>
 <?php }  ?> 
