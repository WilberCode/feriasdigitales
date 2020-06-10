<?php
 /*
Template Name: ¿Cómo participar?
Template Post Type: post, page, event
*/ 
 
get_header();?> 

 
<div class="page max-w-5xl m-auto "> 
   <main class="main px-10 sm:px-5 xl:px-0 ">  
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
 

 <?php  
get_footer();
?>