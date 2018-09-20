<?php
/**
* Template Name: Магазин
*/

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

Timber::render( array( 'template-shop.twig' ), $context );