<?php


use WpTailwindCssThemeBoilerplate\AutoLoader;
use WpTailwindCssThemeBoilerplate\View;


/*
 * Set up our auto loading class and mapping our namespace to the app directory.
 *
 * The autoloader follows PSR4 autoloading standards so, provided StudlyCaps are used for class, file, and directory
 * names, any class placed within the app directory will be autoloaded.
 *
 * i.e; If a class named SomeClass is stored in app/SomeDir/SomeClass.php, there is no need to include/require that file
 * as the autoloader will handle that for you.
 */
require get_stylesheet_directory() . '/app/AutoLoader.php';
require get_stylesheet_directory() . '/inc/widgets.php'; 


$loader = new AutoLoader();
$loader->register();
$loader->addNamespace( 'WpTailwindCssThemeBoilerplate', get_stylesheet_directory() . '/app' );

View::$view_dir = get_stylesheet_directory() . '/templates/views';

require get_stylesheet_directory() . '/includes/scripts-and-styles.php';
 
 
// Tendenze

// Obtiene la Url del thumbnail     
function thumbnail_image_url($size){
    global $post; 
    $image_id = get_post_thumbnail_id($post -> ID);
    $main_image = wp_get_attachment_image_src($image_id, $size);
    //0 = ruta o url, 1 = width, 2 = height, 3 = boolean
    return $main_image[0];
}

//  Register Endpoint
 
function events_endpoint() {
	register_rest_route( 'marcas', '/destacados/', array(
        'methods'  =>   'GET' ,
		'callback' => 'get_marcas',
		'permission_callback' => '__return_true'
    )); 
   
}
add_action( 'rest_api_init', 'events_endpoint' );
  
function get_marcas($request){ 
    // $cat = get_category_by_slug( $request['belleza'] );
	$args = array (
		'post_type'    		=> 'marca',
        'posts_per_page'    => -1,
		'category_name'     => $request['category'],
		'p' =>$request['post_id'], 
	);
	// Run a custom query
	$meta_query = new WP_Query($args);
	
	if($meta_query->have_posts()) {
		//Define and empty array
		$i = 0;
		$data = array();
		// Store each post's data in the array
		while($meta_query->have_posts()) {
			$meta_query->the_post();
			$data[$i]['title']          =   get_the_title(); 
			$data[$i]['thumbnail']      =   get_the_post_thumbnail_url(get_the_ID(), 'full');
			$data[$i]['link']           =   get_the_permalink(); 
			$data[$i]['content']        =   get_the_content();   
			$data[$i]['images']			=   get_field('marca_imagenes'); 
			$data[$i]['id']             =   get_the_ID();  
			$i++;
		}
		// Return the data 
		return $data;
	}else{ 
		return [];
	}
} 



remove_filter('the_excerpt', 'wpautop'); 
 


function ferias_get_marcas($atts = '', $content='')
{
      
	$atributos = shortcode_atts(
		array(
			'taxonomy' => 'marcas_ferias_agosto',
			'year' => '2019',
		),
		$atts); 
	   
	 $show_post_marcas = '';
		//Query post  marcas
				global $post;
				$args = array(
					'post_type'		 => 'marca',  
					'numberposts'	 =>-1,
					'post_status'    => 'publish',
					'posts_per_page' => -1,
					'tax_query' => array(
						array(
							'taxonomy' =>  $atributos['taxonomy'], 
							'terms'    =>  $atributos['taxonomy'],
						),
					),
					'year'             =>  $atributos['year']
				); 
				$meta_query = new WP_Query($args);
	
				if($meta_query->have_posts()) {
					//Define and empty array 
					// Store each post's data in the array
					while($meta_query->have_posts()) {
						$meta_query->the_post(); 
						$terms_slugs_string = '';
						$terms = get_the_terms( $post->ID, $atributos['taxonomy'] );
						if ( $terms && ! is_wp_error( $terms ) ) {                
							$term_slugs_array = array();
							foreach ( $terms as $term ) {
								$term_slugs_array[] = $term->name;
							}
							$terms_slugs_string = join( " & ", $term_slugs_array ); 
						}       
						$show_post_marcas .='<div class="marca-card" data-postidmarca="'.get_the_ID().'" > ';
						if(get_field('marca_card_image')){
							$show_post_marcas .= '<div  class="marca-card-content inline-flex flex-col  p-1 h-59 xs:h-70 sm:h-67 md:h-61 w-full " >  ';
							$show_post_marcas .= '<div><img  class="w-full block"  src="'.get_field("marca_card_image").'" title="'.get_the_title().'" alt="'.get_the_title().'" > </div>';
							$show_post_marcas .= '<div class="inline-flex items-center h-full" > <img  class="w-full marca-card-content-logo marca-card-image-'.get_the_ID().'"  src="'.thumbnail_image_url("full" ).'" title="'.get_the_title().'" alt="'.get_the_title().'" >  </div> </div>';
					   } else { 
						$show_post_marcas .= '<div  class="marca-card-image   flex justify-center items-center h-59  xs:h-70 sm:h-67 md:h-61 p-4" >  
						<img  class="w-full marca-card-image-'.get_the_ID().'"  src="'.thumbnail_image_url("full" ).'" title="'.get_the_title().'" alt="'.get_the_title().'" >  
						</div>';
						}
					 	$show_post_marcas .= '<h2  class="text-lg font-medium text-title mt-2 " >'. $terms_slugs_string.'</h2>
						</div> ';
						
					}
				} 
	$show_grid_marcas = ' 
	<div class=" py-6 sm:py-10  ">      
	   <div class="max-w-5xl m-auto">  
		 <div id="marca-grid"  class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  row-gap-12 sm:row-gap-16  col-gap-3 xs:col-gap-4 sm:col-gap-6" >'.$show_post_marcas.'</div>	
	   </div>
	</div> 
		';
 

	 return  $show_grid_marcas ;


  }

  add_shortcode ('marcas','ferias_get_marcas');


