<?php
include ('connexion.php');
//echo "https://www.youtube.com/watch?v=bTLB-FA_duE&ab_channel=Nicwalle";




    $res = mysqli_query($con,"SELECT lien_youtube FROM film LIMIT 1,5");
   

    $resultats =array();
    while($row = mysqli_fetch_array($res)){
        $resultats[] = $row;
    }

    // for($i=0; $i<5; $i++){
    //     if( isset($resultats[$i]) ) // Si la ligne existe :
    //         {
    //             echo $resultats[$i]['lien_youtube'].'<br/>'; // On affiche une colonne de cette ligne.
    //         }
    // }


    echo $resultats[4]['lien_youtube'];
    



// var_dump($row);
?>