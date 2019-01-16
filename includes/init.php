<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package multiple-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function multiple_blocks_assets() { // phpcs:ignore
	// Styles.
	wp_enqueue_style(
		'multiple-blocks-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		array( 'wp-editor' ),
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' )
	);
}

add_action( 'enqueue_block_assets', 'multiple_blocks_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 * @since 1.0.0
 */
function multiple_blocks_editor_assets() { // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'multiple-blocks-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ),
		true
	);

	// Styles.
	wp_enqueue_style(
		'multiple-blocks-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' )
	);
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'multiple_blocks_editor_assets' );
