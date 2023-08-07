<?php
$songsDir = 'resources/songs'; // Path to your songs directory
$songs = [];

if (is_dir($songsDir)) {
    $songFiles = scandir($songsDir);
    foreach ($songFiles as $file) {
        if ($file !== '.' && $file !== '..') {
            $songTitle = pathinfo($file, PATHINFO_FILENAME); // Remove file extension
            $songs[] = $songTitle;
        }
    }
}

echo json_encode($songs);
?>
