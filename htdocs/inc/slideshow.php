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