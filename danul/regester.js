function validate()
 {
 let fname = document.form2.fname.value;
 let lname = document.form2.lname.value;
 let uname = document.form2.uname.value;
 let email = document.form2.email.value;
 let emailpattern = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)$/;
 let pass = document.form2.pass.value;
 let cpass = document.form2.cpass.value;
 let agree = document.form2.agree.value;

 if(fname=="")
 {
 alert("Please enter the First Name !!");
 }

 if(lname=="")
 {
 alert("Please enter the Last Name !!");
 }

if(uname=="")
 {
 alert("Please enter the User Name !!");
 }

 if (!email.match(emailpattern))
 {
 alert("Please enter the valid Email Address !! ");
 }
 
 if(pass=="")
 {
  alert("Enter your password !!");
 }
 
 if(pass!=cpass)
 {
 alert("Password does not match");
 }

 if(!this.form2.agree.checked)
 {
 alert("You must agree to these terms and conditions");
 }

}