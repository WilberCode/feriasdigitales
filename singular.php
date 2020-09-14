<?php get_header(); ?> 
	 
    <div class="container">  
		<main class="mb-8" >
		<?php if(have_posts()): 
					while(have_posts()):  the_post(); ?>   
						 <div  class="w-full  bg-white  sm:flex m-auto  " >
							<div  class=" sm:max-w-blog-image w-full flex-1" >
								<img class="w-full object-cover h-full " src="<?php the_field('blog-image'); ?>" alt="<?php the_title();?>">
							</div>
							<div  class="flex items-center flex-1  " >
								<div   class="bg-white     pr-5 sm:pr-19 pl-5 sm:pl-9 py-6  sm:pt-13 sm:pb-8 flex flex-col   relative  h-full  w-full "  >
									<div class="text-third-500  " >
									 <h1  class=" lg:text-6xl-1 font-light leading-tight">
									<?php 
											$categories = get_the_category();
											if ( ! empty( $categories ) ) {?>  
													 	<?php echo esc_html( $categories[0]->name ); ?>: 
											 <?php } ?>
										<br> <?php the_title();?></h1>
										<p class=" lg:text-2xl  font-normal tracking-normal text-title mt-8 " ><?php the_excerpt(); ?> </p>

									</div>
									<img class=" w-8 md:w-11 self-end mt-2 " src="https://feriasdigitales.pe/wp-content/uploads/2020/08/flag-post.png" alt="">
								</div>
							</div>
						 </div>
				<section class="max-w-blog-body singular-content m-auto lg:text-bp-xl text-title mt-13 mb-20 ">
					<?php the_content();  ?> 
				</section>

			<?php endwhile;  ?> 
			<?php else:?> 
			<?php endif;
                        rewind_posts();  
                        ?> 
		</main>
	</div> 
<?php get_footer(); ?>