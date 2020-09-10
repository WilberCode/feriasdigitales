<?php
/*
Template Name: Marca Agosto
Template Post Type: post, page, event
*/
 
get_header();?> 
<div class="celebration">
    <div class="celebration-banner bg-white">  
			<?php if(have_posts()):
					while(have_posts()):  the_post(); ?>  
                    <?php the_content(); ?> 
			<?php endwhile;  ?> 
        <?php else:?> 
        <?php endif;
            rewind_posts();  
        ?>  
    </div>  
</div>

<div class=" pt-10 sm:pt-20 px-4 xl:px-0">      
   <div class="max-w-5xl m-auto">  
        <?php dynamic_sidebar('hashtag') ?>   
        <!-- Start - Grid Marcas-->
        <div id="marca-grid"  class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  row-gap-12 sm:row-gap-16  col-gap-4 sm:col-gap-6" > 
        <?php
        //Query post  marcas
        global $post;
                $args = array(
                    'post_type'		 => 'marca',  
                    'numberposts'	 => -1,
                    'post_status'    => 'publish',
                    'posts_per_page' => -1,  
                    'tax_query' => array(
                        array(
                            'taxonomy' => 'marcas_ferias_agosto', 
                            'terms'    => 'marca_mespatrio',
                        ),
                    ),
                ); 
                // query
               $the_query = new WP_Query( $args );  
              
                if( $the_query->have_posts() ): 
                 while( $the_query->have_posts() ) :$the_query->the_post(); 
                        $terms_slugs_string = '';
                        $terms = get_the_terms( $post->ID, 'marcas_ferias_agosto' );
                        if ( $terms && ! is_wp_error( $terms ) ) {                
                            $term_slugs_array = array();
                            foreach ( $terms as $term ) {
                                $term_slugs_array[] = $term->name;
                            }
                            $terms_slugs_string = join( " & ", $term_slugs_array ); 
                        }    
                        ?>   
                       <div class="marca-card" data-postidmarca="<?php the_ID(); ?>" >
                             <div  class="marca-card-image   flex justify-center items-center h-56 sm:h-65 p-4" >
                                 <img  class="w-full marca-card-image-<?php the_ID(); ?>"  src=" <?php  echo thumbnail_image_url('full');  ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" >  
                             </div>
                            <h2  class="text-lg font-medium text-title mt-2 " ><?php echo  $terms_slugs_string ?> </h2>
                        </div> 
                        <?php  endwhile;
                else:
                    printf('<p>Sea el primero en mostrar tu marca </p>');
                endif;
                rewind_posts(); 
                ?>  
        </div>  
        
  </div>
 </div> 
 
<div class="h-20" ></div>


 <?php  
get_footer();
?>
