
<?php

require './MySqlDB.php';

$mySql = new MySqlDB();

$todo = array();
$result = $mySql->lekerdez("todo");


if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {

        $todo[] = $row;
    }
    echo json_encode($todo);
} else {
    echo "0 results";
}
