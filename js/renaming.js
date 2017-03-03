function replace_text_wps($text){
    $replace = array(
        // 'WORD TO REPLACE' => 'REPLACE WORD WITH THIS'
        'Earthquake' => 'Erdbeben',
        'Ice Shard' => 'Eissplitter',
        'Giga Drain' => 'Gigasauger'
    );
    $text = str_replace(array_keys($replace), $replace, $text);
    return $text;
}

add_filter('the_content', 'replace_text_wps');
add_filter('the_excerpt', 'replace_text_wps');
