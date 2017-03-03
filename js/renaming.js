function replace_text_wps($text){
    $replace = array(
        // 'WORD TO REPLACE' => 'REPLACE WORD WITH THIS'
        'wordpress' => '<a href="#">wordpress</a>',
        'excerpt' => '<a href="#">excerpt</a>',
        'function' => '<a href="#">function</a>'
    );
    $text = str_replace(array_keys($replace), $replace, $text);
    return $text;
}

add_filter('the_content', 'replace_text_wps');
add_filter('the_excerpt', 'replace_text_wps');
