<!DOCTYPE html>
<html>
<head>
    <title>Insert Page page</title>
</head>
<body>
    <center>
        <?php
        $conn = new mysqli('localhost', 'root', '', 'admission');
        if($conn->connect_error){
            die('Connection Failed : '.$conn->connect_error);
        }
        
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $sql = "insert into contact(name, email, subject, message)
        values('$name', '$email', '$subject', '$message')";
        if(mysqli_query($conn, $sql)){
            echo "<h3>data stored in a database successfully."
                . " Please browse your localhost php my admin"
                . " to view the updated data</h3>"; 

            echo nl2br("\n$name\n $email\n "
                . "$subject\n $message");
        } else{
            echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
        }
        mysqli_close($conn);
        ?>
    </center>
</body>
</html>