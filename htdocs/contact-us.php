<?php include 'inc/header.php'; ?>

<section class="contact">
	<h2>Contact Us ...</h2>
	<form id="contact-form" action="sendmail.php" method="post" target='ifrm'>
		<input class="text nameicon" type="text" name="name" id="name" placeholder="Name" />
		<input class="text mailicon" type="text" name="mail" id="mail" placeholder="Email" />
		<input class="text texticon" type="text" name="subject" id="subject" placeholder="Subject" />
		<textarea class="text texticon" name="txt" id="txt" placeholder="Text" ></textarea>
		<input class="btn" type="submit" name="submit" value="Send" />
	</form>
	<iframe id='ifrm' name='ifrm' src="" frameborder="0" scrolling="no"></iframe>
</section>

<?php include 'inc/footer.php'; ?>