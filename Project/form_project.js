function validateForm( form )   {
  var first_name = form.first_name.value;
  var last_name  = form.last_name.value;
  var email      = form.email.value;
  var phone      = form.phone_number.value;
  var pass1      = form.password.value
  var pass2      = form.confirm_password.value
   
  var regName    = /\d+$/g; //includes number digits and signs//
  var regEmail   = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //combination of numbers and letters and special symbols(_.-) not before the @ symbol//
  var regPhone   = /^\d{11}$/; // 11 number digits           
  
  if (first_name == "" || regName.test(first_name)) {
    window.alert("Please enter your first name properly.");
    
    focus_error( 'first_name' );  
    
    return false;
  }else {
    input_valid( 'first_name' )
  }
  
  if (last_name == "" || regName.test(last_name)) {
    window.alert("Please enter your last name properly.");
    
    focus_error( 'last_name');  
    
    return false;
  }else {
    input_valid( 'last_name' )
  }  
  
  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    
    focus_error( 'email');  
    
    return false;
  }else {
    input_valid( 'email' )
  }  
  
  if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter valid phone number.");
    
    focus_error( 'phone_number' );  
    
    return false;
  }else {
    input_valid( 'phone_number' )
  }
                
  if (pass1 == "") {
    alert("Please enter a valid password");
    
    focus_error( 'password');  
    
    return false;
  }else {
    input_valid( 'password' )
  }
  
  if (pass2 == "") {
    alert("Please re-enter your password");
    
    focus_error( 'confirm_password' );  
    
    return false;
  }else {
    input_valid( 'confirm_password' )
  }  
  
  if (pass1 != pass2) {
    alert("Passwords doesn't match");
    
    focus_error( 'password' );
    
    focus_error( 'confirm_password' );  
    
    return false;
  }else {
    input_valid( 'password' )
    input_valid( 'confirm_password' )
  }        
  
  return true;
  }  
  
  function focus_error( input ) {
    input_box = document.getElementById( input )
    
    input_box.style.borderColor = "#ff0000";
  
    input_box.focus()
  }  
  
  function input_valid( input ) {
    input_box = document.getElementById( input )
    
    input_box.style.border = "1px solid rgb(168, 167, 167)";
  }
  