<?php require_once('dynamic_content.php'); ?>
<!doctype html>
<html lang="en-US">
<head>
	<meta charset="utf-8" />
	<title>..:: UnderDev ::..</title>
	<link rel="stylesheet" type="text/css" href="1styles.css" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<script type="text/javascript" src="scripts/html5shiv.js"></script>
	<script type="text/javascript"> document.write('<script type="text/javascript" src=scripts/' + ('__proto__' in {} ? 'zepto' : 'jquery') + '.js><\/script>'); </script>
	<script type="text/javascript" src="scripts/underdev.js"></script>
</head>
<body>
	<header></header>
	<section class='slideshow'>
		<div class="logo">
			<h1 class="indent">you logo title</h1>
		</div>
			<div class="descContainer">
				<div class="title">
					<h1>Donec interdum aliquet feugiat</h1>
					</div>
				<div class="desc">
					<?php dynamic_content('description',"<div class='desc'>",'</div>') ?>
				</div>
			</div>
		<div class="noise"></div>
		<section class="backimg">
			<?php
				$images_path = './images/under';

				$images = scandir($images_path);
				$slidesLen = 0;
				foreach($images as $img){
					$img_arr = explode('.', $img);
					$img_type = strtolower( end($img_arr) );
					if ($img_type=='jpg') {
						echo "<div style=\"background-image:url('$images_path/$img');\"></div>";
						$slidesLen++;
					}
				}
			?>
		</section>
	</section>
	<footer>
		<h1>Under Construction</h1>
		<h2>Tel: +00 000 000 0000</h2>
	</footer>
</body>
</html>