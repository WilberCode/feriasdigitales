<?php get_header(); ?>   
<div class="service pt-10 px-4 lg:px-0" >  
   <div class="max-w-5xl m-auto">
       <div class="flex flex-col-reverse sm:grid grid-cols-3  col-gap-10 ">
            <aside class="aside mt-8 sm:mt-0 ">
                <?php
                // Query post services
                $args = array(
                    'post_type'		=> 'servicio',
                    'numberposts'	=> -1,
                    'post_status' => 'publish',
                    'posts_per_page'   => 6
                ); 
                // query
                $the_query = new WP_Query( $args );  
                if( $the_query->have_posts() ): 
                    while( $the_query->have_posts() ) :$the_query->the_post(); ?>   
                        <a class="text-lg text-black block mb-3" href="<?php the_permalink(); ?>" >  <?php the_title();  ?>  </a> 
                        <?php endwhile;
                    else:
                        printf('<p>Sin contenido</p>');
                    endif;
                    rewind_posts();  ?>    
                    <!-- End While post type services --> 
            </aside>
           <main class="service-main col-span-2 ">  
                <?php if(have_posts()):
                                while(have_posts()):  
                                    the_post(); ?>
                                     <h1  class=" mt-6 mb-6 text-4xl text-black font-normal " ><?php  the_title(); ?> </h1>  
						      <?php  the_content(); ?>
                <?php endwhile;
                        else:
                            printf('<p>Sin contenido</p>');
                    endif;
                rewind_posts(); ?>
           </main>
            
       </div>
   </div> 
 
   
 </div>
<?php get_footer(); ?>