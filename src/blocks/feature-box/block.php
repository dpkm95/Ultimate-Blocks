<?php

function ub_render_feature_box_block($attributes){
    extract($attributes);

    $column1 = '<div class="ub_feature_1">
    <img class="ub_feature_one_img" src="'.$imgOneURL.'" alt="'.$imgOneAlt.'"/>
    <p class="ub_feature_one_title" style="text-align: '.$title1Align.'">'.
        $columnOneTitle.'</p>
    <p class="ub_feature_one_body" style="text-align: '.$body1Align.'">'.
        $columnOneBody.'</p></div>';

    $column2 = '<div class="ub_feature_2">
    <img class="ub_feature_two_img" src="'.$imgTwoURL.'" alt="'.$imgTwoAlt.'"/>
    <p class="ub_feature_two_title" style="text-align: '.$title2Align.'">'.
        $columnTwoTitle.'</p>
    <p class="ub_feature_two_body" style="text-align: '.$body2Align.'">'.
        $columnTwoBody.'</p></div>';

    $column3 = '<div class="ub_feature_3">
    <img class="ub_feature_three_img" src="'.$imgThreeURL.'" alt="'.$imgThreeAlt.'"/>
    <p class="ub_feature_three_title" style="text-align: '.$title3Align.'">'.
        $columnThreeTitle.'</p>
    <p class="ub_feature_three_body" style="text-align: '.$body3Align.'">'.
        $columnThreeBody.'</p></div>';

    $columns = $column1;

    if((int)$column >= 2){
        $columns .= $column2;
    }
    if((int)$column >= 3){
        $columns .= $column3;
    }

    return '<div class="ub_feature_box column_'.$column.' '.$className.'">'.
    $columns.'</div>';
}

function ub_register_feature_box_block() {
	if ( function_exists( 'register_block_type' ) ) {
        register_block_type( 'ub/feature-box-block', array(
            'attributes' => array(
                'column' => array(
                    'type' => 'string',
                    'default' => '2'
                ),
                'columnOneTitle' => array(
                    'type' => 'string',
                    'default' => 'Title One'
                ),
                'title1Align' => array(
                    'type' => 'string',
                    'default' => 'center'
                ),
                'columnTwoTitle' => array(
                    'type' => 'string',
                    'default' => 'Title Two'
                ),
                'title2Align' => array(
                    'type' => 'string',
                    'default' => 'center'
                ),
                'columnThreeTitle' => array(
                    'type' => 'string',
                    'default' => 'Title Three'
                ),
                'title3Align' => array(
                    'type' => 'string',
                    'default' => 'center'
                ),
                'columnOneBody' => array(
                    'type' => 'string',
                    'default' =>  'Gutenberg is really awesome! Ultimate Blocks makes it more awesome!'
                ),
                'body1Align' => array(
                    'type' => 'string',
                    'default' => 'left'
                ),
                'columnTwoBody' => array(
                    'type' => 'string',
                    'default' =>  'Gutenberg is really awesome! Ultimate Blocks makes it more awesome!'
                ),
                'body2Align' => array(
                    'type' => 'string',
                    'default' => 'left'
                ),
                'columnThreeBody' => array(
                    'type' => 'string',
                    'default' =>  'Gutenberg is really awesome! Ultimate Blocks makes it more awesome!'
                ),
                'body3Align' => array(
                    'type' => 'string',
                    'default' => 'left'
                ),
                'imgOneURL' => array(
                    'type' => 'string',
                    'default' =>  ''
                ),
                'imgOneID' => array(
                    'type' => 'number'
                ),
                'imgOneAlt' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'imgTwoURL' => array(
                    'type' => 'string',
                    'default' =>  ''
                ),
                'imgTwoID' => array(
                    'type' => 'number'
                ),
                'imgTwoAlt' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'imgThreeURL' => array(
                    'type' => 'string',
                    'default' =>  ''
                ),
                'imgThreeID' => array(
                    'type' => 'number'
                ),
                'imgThreeAlt' => array(
                    'type' => 'string',
                    'default' => ''
                )
            ),
			'render_callback' => 'ub_render_feature_box_block'));
	}
}

add_action('init', 'ub_register_feature_box_block');