<?php 
    if(isset($_POST["gallery"])){
        $carpeta = '../../../images/banner';
        if (is_dir($carpeta)) {
            if ($dh = opendir($carpeta)) {
                while (($archivo = readdir($dh)) !== false) {
                    if ($archivo != '.' && $archivo != '..') {
                        echo $archivo."*";
                    }
                }                
                closedir($dh);
            }
        }        
    }
?>