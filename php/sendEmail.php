<?php 
   if(isset($_POST)){

      
         $name = $_POST['name'];
      $message = $_POST['message'];
      $email = $_POST['email'];
      $msg = '<html><h2>From:"'.$name.'"</h2><p><small>"'.$email.'"</small></p><p><em>"'.$message.'"</em></p></html>'
         
   
     mail('igbinobaroosaretin@gmail.com', 'Contact from your Portfolio Website by "'.$name.'"', $msg)
   }

     

?>