<?php
 /*
Template Name: ¿Cómo participar?
Template Post Type: post, page, event
*/ 
 
get_header();?> 

 
<div class="page max-w-5xl m-auto "> 
   <main class="main px-6 sm:px-5 xl:px-0 ">  
        <?php if(have_posts()):
                        while(have_posts()):  
                            the_post(); ?>
                         <?php  the_content(); ?>
        <?php endwhile;
                else:
                    printf('<p>Sin contenido</p>');
            endif;
        rewind_posts(); ?>
    </main>  
</div>
 
<footer class="footer bg-third-500 mt-5" >
    <div  class="max-w-5xl m-auto flex justify-center sm:justify-end py-14 px-4 sm:px-5 xl:px-0 "  >
        <div class="sm:flex items-center " >
            <h2  class="text-white sm:mr-10 italic font-medium text-xl sm:text-3xl mb-5 sm:mb-0  text-center sm:text-left " >¿Listo para participar?</h2> 
            <ul  class="footer-social" >
                <li><a href="https://facebook.com/feriasdigitales/"><img src="<?php echo get_bloginfo('template_directory').'/assets/img/facebook.png'; ?>" alt="Facebook"></a></li>
                <li><a href="https://www.instagram.com/feriasdigitales/"><img src="<?php echo get_bloginfo('template_directory').'/assets/img/instagram.png'; ?>" alt="Instagram"></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=+51998315039"><img src="<?php echo get_bloginfo('template_directory').'/assets/img/whatsapp.png'; ?>" alt="whatsapp"></a></li>
            </ul>
        </div>
    </div>
</footer>

 <?php  
get_footer();
?>