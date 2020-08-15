<?php get_header(); ?>   
    <div class="container"> 
			<?php if(have_posts()):
					while(have_posts()):  the_post(); ?>  
						 
			<?php endwhile;  ?> 
			<?php else:?> 
			<?php endif;
                        rewind_posts();  
                        ?> 
    </div>
<?php get_footer(); ?>