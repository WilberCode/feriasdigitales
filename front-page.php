
<?php 
get_header();?> 

<?php $file = './tailwind.js';?>   

<div class="celebration">
    <div class="celebration-banner bg-white"> 
         <?php 
            echo do_shortcode('[metaslider id="186"]'); 
        ?> 
    </div>  
</div>

<div class=" pt-10 sm:pt-20 px-4 xl:px-0">   
   <div class="max-w-5xl m-auto"> 
        <h3  class="text-secondary-300 font-medium mb-10 text-lg " >#YoMeQuedoEnCasa</h3> 
        <!-- Start - Grid Marcas-->
        <div id="marca-grid"  class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  row-gap-12 sm:row-gap-16  col-gap-4 sm:col-gap-6" > 
        <?php
        //Query post services
        global $post;
                $args = array(
                    'post_type'		=> 'marca',
                    'numberposts'	=> -1,
                    'post_status' => 'publish',
                    'posts_per_page'   => -1
                ); 
                // query
               $the_query = new WP_Query( $args ); 
              
                if( $the_query->have_posts() ): 
                 while( $the_query->have_posts() ) :$the_query->the_post();  ?>   
                       <div class="marca-card" data-postidmarca="<?php the_ID(); ?>" >
                             <div  class="marca-card-image   flex justify-center items-center h-56 sm:h-65 p-4 " >
                                 <img  class="w-full marca-card-image-<?php the_ID(); ?>"  src=" <?php  echo thumbnail_image_url('full');  ?>" >  
                             </div>
                            <h2  class="text-lg font-medium text-secondary-300 mt-2 " ><?php the_category(''); ?> </h2>
                            
                        </div> 
                        <?php  endwhile;
                else:
                    printf('<p>Sin contenido</p>');
                endif;
                rewind_posts(); 
                ?>  
        </div> 

        <div class="marca-modal"  id="marca-modal" > 
            <div class="marca-modal-body" id="marca-modal-body" >
                <span  class="marca-modal-close">X</span>
                <div class="marca-modal-info" id="marca-modal-info">  
                </div>
            </div> 
        </div>     
  </div>
 </div> 
<div class="h-20" >

</div>


 <?php  
get_footer();
?>