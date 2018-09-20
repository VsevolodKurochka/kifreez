<?php
/**
* Template Name: Главная
*/

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

// Calendar section
// 'category__not_in'	=> array(3),
///date_default_timezone_set('UTC');
//print_r(date());

$args = array(
	'post_type' 				=> 'events',
	'posts_per_page' 		=> -1,
	'post_status'		 		=> 'publish',
	'orderby'	=> 'event_date',
	'order'		=> 'ASC',
	'meta_query' => array(
		array(
			'key'     		=> 'event_date',
			'value'				=> date('Ymd'),
			'compare' 		=> '>'
		)
	)
);
$context['events'] = new Timber\PostQuery($args);

$args_past = array(
	'post_type' 				=> 'events',
	'posts_per_page' 		=> -1,
	'post_status'		 		=> 'publish',
	'orderby'	=> 'event_date',
	'order'		=> 'ASC',
	'meta_query' => array(
		array(
			'key'     		=> 'event_date',
			'value'				=> date('Ymd'),
			'compare' 		=> '<'
		)
	)
);
$context['events_past'] = new Timber\PostQuery($args_past);

//print_r($context['events']);

// $args = array(
// 	'post_type' 				=> 'events',
// 	'posts_per_page' 		=> -1,
// 	'post_status'		 		=> 'publish',
// 	'category__in'	=> array(3),
// );
// $context['events_past'] = new Timber\PostQuery($args);

//$calendar_events_json = json_encode(get_field('calendar_events'));
//$calendar_events_json = preg_replace('/"([^"]+)"\s*:\s*/', '$1:', $calendar_events_json);

//$context['calendar_events'] = $calendar_events_json;

Timber::render( array( 'template-home.twig' ), $context );