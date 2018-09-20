<?php
/**
* Template Name: Главная
*/

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

Timber::render( array( 'template-home.twig' ), $context );