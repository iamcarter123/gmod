<?php 

require("db.php");

if(isset($_POST["action"]) && $_POST["action"] == "gettemplate") {
    $query = sprintf("SELECT template FROM templates WHERE username = '%s'", mysqli_real_escape_string($db, $_POST["username"]));
    if(mysqli_num_rows(mysqli_query($db, $query)) != 1) {
        echo "notemplate";
        return;
    } 
    $fetch = mysqli_fetch_assoc(mysqli_query($db, $query));
    echo $fetch["template"];
}

if(isset($_POST["action"]) && $_POST["action"] == "changetemplate") {
    $query = sprintf("SELECT * FROM templates WHERE username = '%s'", mysqli_real_escape_string($db, $_POST["username"]));
    if(mysqli_num_rows(mysqli_query($db, $query)) == 0) {
        $query2 = sprintf("INSERT INTO templates (template, username) VALUES ('%s', '%s')", mysqli_real_escape_string($db, $_POST["template"]), mysqli_real_escape_string($db, $_POST["username"]));
    } else {
        $query2 = sprintf("UPDATE templates SET template = '%s' WHERE username = '%s'", mysqli_real_escape_string($db, $_POST["template"]), mysqli_real_escape_string($db, $_POST["username"]));
    }
    mysqli_query($db, $query2);
}

?>