<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>Sending mail ...</title>
	<style type="text/css">
		body {
			background-color: #F4F4F4;
		}

		.ok {
			color:#23B3AB;
		}

		.err {
			color:#BD5B3D;
		}
	</style>
</head>
<body>
	<?php
		error_reporting(E_ALL ^ E_NOTICE);

		$admin = 'info@mydomain.com';

		$email = $_POST['mail'];

		if( strlen($email)>=7 ){
			if( @mail (
					$admin,
					"New registeration",
					"From:<$email>" )
			){
				echo '<h2 class="ok">You will hear about us soon</h2>';
			}else{
				echo '<h2 class="err">Error in sending mail.</h2>';
			}
		}else{
			echo '<h2 class="err">Access Restricted !</h2>';
		}
	?>
</body>
</html>