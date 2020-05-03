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

// Obtiene la Url de carpeta upload
function tz_get_upload_dir_var( $param, $subfolder = '' ) {
    $upload_dir = wp_upload_dir();
    $url = $upload_dir[ $param ];
 
    if ( $param === 'baseurl' && is_ssl() ) {
        $url = str_replace( 'http://', 'https://', $url );
    }
 
    return $url . $subfolder;
}
 
function events_endpoint() {
	register_rest_route( 'marcas/', 'destacados/', array(
        'methods'  =>   'GET' ,
        'callback' => 'get_marcas',
    )); 
   
}
add_action( 'rest_api_init', 'events_endpoint' );
  
function get_marcas($request){ 
    // $cat = get_category_by_slug( $request['belleza'] );
	$args = array (
		'post_type'    		=> 'marca',
        'posts_per_page'    => -1,
		'category_name'     => $request['category'],
		'p' =>$request['post_id']
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
			$data[$i]['informations']	=   get_field('marca_informacion');
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
 


 



