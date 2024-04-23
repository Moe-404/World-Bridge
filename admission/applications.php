<!DOCTYPE html>
<html>

<head>
    <title>Insert Page page</title>
</head>

<body>
    <center>
        <?php
        $conn = new mysqli('localhost', 'root', '', 'Admission');
        if($conn->connect_error){
            die('Connection Failed : '.$conn->connect_error);
        }
        
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $grade = $_POST['grade'];
        $comment = $_POST['comment'];
        $gender = $_POST['gender'];
        $date = $_POST['date'];
        $sql = "insert into applications(name, email, phone, date, gender, grade, comment)
        values('$name', '$email', '$phone', '$date', '$gender', '$grade', '$comment')";
        if(mysqli_query($conn, $sql)){
            echo "<h3>data stored in a database successfully."
                . " Please browse your localhost php my admin"
                . " to view the updated data</h3>"; 

            echo nl2br("\n$name\n $email\n "
                . "$phone\n $date\n $gender\n $grade\n $comment");
        } else{
            echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
        }

        mysqli_close($conn);
        ?>
    </center>
</body>

</html>