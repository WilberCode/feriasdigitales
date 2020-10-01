<?php 
get_header(); ?> 

<main class="main"> 
    <div class="max-w-aligndefault m-auto px-4 xl:px-0">
    <?php
      if(have_posts()):
    while ( have_posts() ) :    
        the_post(); 
        the_content(); 
    endwhile;
    else:
        printf('<p>Empty</p>');
    endif;
    rewind_posts(); 

    ?>   
    </div>
</main> 

<?php
get_footer();
