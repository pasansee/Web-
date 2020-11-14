function validate()
{
let email = document.form1.email.value;
let emailpattern = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)$/;
let pass = document.form1.pass.value;

if (!email.match(emailpattern))
 {
 alert("Please enter your valid Email Address ! ");
 }

if (pass=="")
 {
 alert("Please enter your password ! ");
 }

}
