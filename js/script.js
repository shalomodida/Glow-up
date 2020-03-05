
        
// var modal = document.getElementById('id01');


// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
$(document).ready(function(){
  $("#sign-up").on('click', function() {
      event.preventDefault();
      var email=$("#email").val();
      var password=$("#password").val();
      var reppassword=$("#reppassword").val();


      if(email ==''||password ==''||reppassword ==''){
         alert("Please ensure you fill in all the fields!");
     }
      else{
          alert(" Thank you. "  + " You have succesfully been signed-up for Glow-up collection,stay with us for unique designs.")
     }
  })
  function finder(){
    var searchedWord = document.getElementById('searchedWord').value;
    if(searchedWord=="about"){
       var mySearchResult = window.open("about.html");

    //  if else(searchedWord==""){
    //     var mySearchResult = window.open("ready.html");
        
    }else{
       alert("Genre not listed");
    }
 }
 function prompt(){
    var searchedWord = document.getElementById('promote').value;
       var mySearchResult = window.open("about.html");
       }
})











