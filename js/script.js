function validate() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var text = document.getElementById("area").value;

  if (name === "") {
      alert("Please fill in your name");
      return false;

  } else if (email === "") {
      alert("Please insert your email!");
      return false;

  } else if (text === "") {

      alert("There is no text to submit!");
  } else {

      alert("We have recieved your message dear " + name + " and we will get back to you");


  };
};

