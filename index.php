<?php get_header(); ?> 
	<div class="container ">
	<?php 
	$page_for_posts_id = get_option( 'page_for_posts' );
	echo apply_filters( 'the_content', get_post_field( 'post_content', $page_for_posts_id ) );
	?>  
	</div> 
 
    <div class="container">  
		<main class="mb-20" >
		<?php if(have_posts()): 
					while(have_posts()):  the_post(); ?>   
						 <a href="<?php the_permalink(); ?>" class="max-w-blog-post blog-post   bg-white grid grid-cols-1 sm:grid-cols-2 m-auto mb-8 sm:mb-5 " >
							<div  class=" sm:max-w-blog-image" >
								<img class="w-full object-cover h-full " src="<?php echo thumbnail_image_url('full');?>" alt="<?php the_title();?>">
							</div>
							<div  class="flex items-center text-third-500 px-5 xs:px-7 sm:px-0 sm:py-4 md:py-5 lg:py-7  " >
								<div   class="bg-white  maxsm:-mt-12 sm:-ml-21   pr-5 sm:pr-10 pl-5 sm:pl-9 py-6  sm:pt-11 sm:pb-8 flex flex-col justify-between relative blog-content h-full  w-full "  >
									<div>
										<h2 class="   lg:text-bc-xl font-medium  ">REDES SOCIALES</h2>
										<h1  class="  lg:text-bt-xl font-medium leading-snug"><?php the_title();?>  </h1>
									</div>
								</div>
							</div>
						 </a>
			<?php endwhile;  ?> 
			<?php else:?> 
			<?php endif;
                        rewind_posts();  
                        ?> 
		</main>
	</div> 
<?php get_footer(); ?>