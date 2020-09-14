<?php get_header(); ?> 
	<div class="container ">
	<?php 
	$page_for_posts_id = get_option( 'page_for_posts' );
	echo apply_filters( 'the_content', get_post_field( 'post_content', $page_for_posts_id ) );
	?>  
	</div> 
 
    <div class="container">  
		<div class="max-w-blog-post m-auto">
			<main class="mb-20 grid grid-cols-1 sm:grid-cols-2 row-gap-19 col-gap-25  " >
			<?php if(have_posts()): 
						while(have_posts()):  the_post(); ?>   
							<a href="<?php the_permalink(); ?>" class="   bg-white " >
								<div  class=" " >
									<img class="w-full object-cover h-full " src="<?php echo thumbnail_image_url('full');?>" alt="<?php the_title();?>">
								</div>
								<div  class="flex items-center text-third-500 px-5 xs:px-7   sm:py-4 md:py-5 lg:py-7  " >
									<div   class="bg-white  -mt-18  px-8   sm:pb-8 flex flex-col justify-between relative blog-content h-full  w-full "  >
										<div>	
											<?php 
											$categories = get_the_category();
											if ( ! empty( $categories ) ) {?>  
													<h2 class=" lg:text-bc-xl font-medium uppercase  ">	<?php echo esc_html( $categories[0]->name ); ?></h2>
											 <?php } ?> 
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
	</div> 
<?php get_footer(); ?>