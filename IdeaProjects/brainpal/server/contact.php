<?php
mail("ohadnav@gmail.com", $_POST["contact_name"] . " from BrainPal",
"", $_POST["contact_email"] . " from navon.site88.net");
echo "Thanks! We'll soon be in touch."
?>