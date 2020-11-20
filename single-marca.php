


<?php get_header(); ?>   
  
<div class="bg-white relative mb-10 mt-2" > 
            <div class="marca-modal-body " id="marca-modal-body "    >
                <span  class="marca-modal-close"> <a href="<?php echo get_home_url('url'); ?>">X</a> </span>
               
                <div class="marca-modal-info" id="marca-modal-info">  
                 <?php  if(get_field('marca_imagenes') == false): ?>
                         <div  class=" relative mt-4"> 
                            <div  class="pl-0 "> 
                            <?php if(have_posts()):
                                while(have_posts()):  
                                    the_post(); ?>   
                                            <img  class="  w-34 mb-10 sm:w-40 md:w-54 m-auto modal-logo"  src="<?php  echo thumbnail_image_url('full');  ?>" alt="<?php the_title();  ?>">
                                            <div  class="marca-modal-content"> 
                                                <?php the_content();  ?>
                                            </div>
                                <?php endwhile;
                            else:
                                printf('<p>Sin contenido</p>');
                            endif;
                            rewind_posts();  ?>    
                            </div> 
                        </div>
                    <?php  
                        else: ?>
                               <div  class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10"> 
                                    <div>  
                                    <?php  if(get_field('marca_imagenes')): ?>  
                                        <?php  while(has_sub_field('marca_imagenes')):  

                                        //$image = get_sub_field('marca_imagenes_individual');  
                                            ?> 
                                            <img class="mb-4 w-full" src="<?php echo  get_sub_field('marca_imagenes_individual'); ?>" alt="<?php the_title(); ?>"  />
                            
                                    <?php  endwhile; ?> 
                                    <?php  endif; ?> 
                                    </div>  
                                    <div  class="pl-0 sm:pl-6 marca-modal-content--old"> 
                                    <?php if(have_posts()):
                                        while(have_posts()):  
                                            the_post(); ?>   
                                                    <img  class=" w-34 mb-10 sm:w-40 md:w-54 "  src="<?php  echo thumbnail_image_url('full');  ?>" alt="<?php the_title();  ?>">
                                                    <?php the_content();  ?>
                                            
                                        <?php endwhile;
                                    else:
                                        printf('<p>Sin contenido</p>');
                                    endif;
                                    rewind_posts();  ?>    
                                    </div> 
                                </div>
                <?php  endif;  ?>    
               </div> 
        </div> 
    </div>  
    <div class="max-w-4xl m-auto pt-3 pl-6 lg:pl-0 mb-8">
    <a href="<?php echo get_home_url('url'); ?>"  class="font-bold underline " >Ir a Home</a>
    </div>
</div>   
 
<?php get_footer(); ?>