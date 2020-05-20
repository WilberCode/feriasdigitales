<?php


use WpTailwindCssThemeBoilerplate\AssetResolver;


add_action( 'wp_enqueue_scripts', function () {

	// registers scripts and stylesheets
	wp_register_style( 'app', AssetResolver::resolve( 'css/app.css' ), [], false );
 	wp_register_script( 'app', AssetResolver::resolve( 'js/app.js' ), [], false, true );
 	  // enqueue global assets
	// wp_enqueue_style('fontawesome',"https://use.fontawesome.com/releases/v5.0.13/css/all.css"); 
	wp_enqueue_style('font-roboto',"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,400&display=swap"); 
   
	wp_enqueue_script( 'jquery');
	wp_enqueue_style( 'app' ); 
	wp_enqueue_script( 'app' );    

	// Api restuiol

	wp_localize_script( 'app', 'ajax_marcas', array(
        'url'    => rest_url( '/marcas/destacados' ),
        'nonce'  => wp_create_nonce( 'wp_rest' ),
    ) );
	// wp_localize_script( 'app', 'ajax_congresos', array(
    //     'url'    => rest_url( '/congresos/destacados' ),
    //     'nonce'  => wp_create_nonce( 'wp_rest' ),
    // ) );  
	// wp_localize_script( 'app', 'ajax_diplomas', array(
    //     'url'    => rest_url( '/diplomas/destacados' ),
    //     'nonce'  => wp_create_nonce( 'wp_rest' ),
    // ) );


} );