
        
// var modal = document.getElementById('id01');


// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
$(document).ready(function(){
  $("#sign-up").click(function() {
      event.preventDefault();
      var email=$("#email").val();
      var password=$("#password").val();
      var reppassword=$("#reppassword").var();


      if(email ==''||password ==''||reppassword ==''){
         alert("Please ensure you fill in all the fields!");
     }
      else{
          alert(" Thank you "  + " You have succesfully been signed for Glow-up collection,stay with us for unique designs.")
     }
  })