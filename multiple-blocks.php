<?php
/**
 * Plugin Name: Multiple Blocks
 * Plugin URI: https://github.com/khoipro/multiple-blocks
 * Description: A Gutenberg plugin created via create-guten-block.
 * Author: khoipro
 * Author URI: https://khoipro.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package multiple-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/init.php';
