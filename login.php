<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Log in </title>
  </head>
  <body>
      <div class="container">
	  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="login.php">Log In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
	  </nav>
	  <div class="jumbotron bg-primary text-white text-center">
            <h1 class="display-1">Welcome to Recipes !</h1>
            <p class="display-4">This is the recipes page...</p>
        </div>

        <h1>Hello, Please Log In!!</h1>
        <form action="login.php" method="POST">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">Apart from FaceBook, Twitter and Instagram We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" name="password" class="form-control" id="exampleInputPassword1">
              <small id="emailHelp" class="form-text text-muted">Best to just text it to me directly</small>

            </div>
         
            
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </div>
   

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>
<?php

print_r ($_POST);
// Connect to the Database
$servername = "127.0.0.1";
$username = "gary";
$password = "gary";
$database = "Users";
echo "Connecting...";
// Create connection
$link = mysqli_connect($servername, $username, $password, $database);

// Check connection 
if (mysqli_connect_error()) {
	printf("Connection Failed: %s\n ", mysqli_connect_error());
	exit("Exiting Script");
}


echo "Connected successfully". '<br>';

// echo "Your E mail Address is ". $_POST['email'].'<br>';
// echo "And your password is ". $_POST['password']. '<br>';

// prepare the queryString
$sql = "SELECT id, email, password  FROM UsersData";
$result = mysqli_query($link, $sql);

if (mysqli_num_rows($result)> 0 ) {
	while ($row = mysqli_fetch_assoc($result)) {
		echo "The User ID is: ". $row['id']. "<br>";
		echo "The E Mail address is ". $row['email'];
	}
} else {
	echo "No Result";
}

//close the connection

mysqli_close($link);
?>




