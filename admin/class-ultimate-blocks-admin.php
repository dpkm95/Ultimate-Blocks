<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://imtiazrayhan.com/
 * @since      1.0.2
 *
 * @package    Ultimate_Blocks
 * @subpackage Ultimate_Blocks/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Ultimate_Blocks
 * @subpackage Ultimate_Blocks/admin
 * @author     Imtiaz Rayhan <imtiazrayhan@gmail.com>
 */
class Ultimate_Blocks_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.2
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.2
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * The PATH of this plugin.
	 *
	 * @since    1.0.2
	 * @access   private
	 * @var      string    $plugin_name    The PATH of this plugin.
	 */
	private $plugin_path;

	/**
	 * The URL of this plugin.
	 *
	 * @since    1.0.2
	 * @access   private
	 * @var      string    $plugin_name    The URL of this plugin.
	 */
	private $plugin_url;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.2
	 */
	public function __construct() {

		$this->plugin_name = ULTIMATE_BLOCKS_NAME;
		$this->version     = ULTIMATE_BLOCKS_VERSION;
		$this->plugin_path = ULTIMATE_BLOCKS_PATH;
		$this->plugin_url  = ULTIMATE_BLOCKS_URL;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.2
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Ultimate_Blocks_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Ultimate_Blocks_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/ultimate-blocks-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.2
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Ultimate_Blocks_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Ultimate_Blocks_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/ultimate-blocks-admin.js', array( 'jquery' ), $this->version, false );

	}


	/**
	 * Register Setting Pages for the admin area.
	 *
	 * @since    1.0.2
	 */
	public function register_admin_menus() {

		add_menu_page(
			'UltimateBlocks Settings',
			'Ultimate Blocks',
			'manage_options',
			'ultimate-blocks',
			array( $this, 'main_menu_template_cb' ),
			'dashicons-tagcloud',
			20
		);

	}

	/**
	 * Set template for main setting page
	 *
	 * @return void
	 */
	public function main_menu_template_cb() {

		require_once $this->plugin_path . 'admin/templates/menus/main-menu.php';

	}

	/**
	 * Enable/Disable Block
	 *
	 * @return void
	 */
	public function toggle_block_status() {

		check_ajax_referer( 'toggle_block_status' );

		$block_name = sanitize_text_field( $_POST['block_name'] );

		$enable = $_POST['enable'];

		if ( ! $this->block_exists( $block_name ) ) {
			wp_send_json_error( array(
				'error_message' => 'Unknown block name',
			));
		}

		$saved_blocks = get_option( 'ultimate_blocks', false );
		if ( $saved_blocks ) {
			foreach ( $saved_blocks as $key => $block ) {
				if ( $block['name'] === $block_name ) {
					$saved_blocks[ $key ]['active'] = ( $enable === 'true' );
				}
			}
			update_option( 'ultimate_blocks', $saved_blocks );
		} else {
			update_option( 'ultimate_blocks', $this->blocks() );
		}

		wp_send_json_success( get_option( 'ultimate_blocks', false ) );
	}

	public function insert_blocks_settings() {
		$ultimate_blocks_settings = wp_json_encode( get_option( 'ultimate_blocks', array() ) );
		?>

		<script> window.ultimate_blocks=<?php echo $ultimate_blocks_settings; ?> </script>

		<?php
	}

	/**
	 * Check block exists.
	 *
	 * @param string $name Block Name.
	 * @return bool
	 */
	protected function block_exists( $name ) {
		$blocks = $this->blocks();

		$unknown_block = true;
		foreach ( $blocks as $key => $block ) {
			if ( $block['name'] === $name ) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Get Plugin BLOCKS
	 *
	 * @return array
	 */
	protected static function blocks() {
		return [
			array(
				'label'  => 'Button (Improved)',
				'name'   => 'ub/button-block',
				'active' => true,
			),
			array(
				'label'  => 'Call To Action',
				'name'   => 'ub/call-to-action',
				'active' => true,
			),
			array(
				'label'  => 'Call To Tweet',
				'name'   => 'ub/click-to-tweet',
				'active' => true,
			),
			array(
				'label'  => 'Content Toggle',
				'name'   => 'ub/content-toggle',
				'active' => true,
			),
			array(
				'label'  => 'Divider',
				'name'   => 'ub/divider',
				'active' => true,
			),
			array(
				'label'  => 'Feature Box',
				'name'   => 'ub/feature-box',
				'active' => true,
			),
			array(
				'label'  => 'Notification Box',
				'name'   => 'ub/notification-box',
				'active' => true,
			),
			array(
				'label'  => 'Number Box',
				'name'   => 'ub/number-box',
				'active' => true,
			),
			array(
				'label'  => 'Number Box',
				'name'   => 'ub/number-box',
				'active' => true,
			),
			array(
				'label'  => 'Social Share',
				'name'   => 'ub/social-share',
				'active' => true,
			),
			array(
				'label'  => 'Spacer',
				'name'   => 'ub/spacer',
				'active' => true,
			),
			array(
				'label'  => 'Testimonial',
				'name'   => 'ub/testimonial-block',
				'active' => true,
			),
		];
	}

}