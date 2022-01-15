<?php

    $query = 'SELECT 
      FROM 
      ORDER BY ';

    $result = mysqli_query($connect, $query);

    if (!$result)
    {
      echo 'Error Message: ' . mysqli_error($connect) . '<br>';
      exit;
    }

    echo '<p>Trouver ' . mysqli_num_rows($result) . ' rows:</p>';

    while ($record = mysqli_fetch_assoc($result))
    {
      echo '<hr>';
    }

?> 