 //Author: [Adea Krasniqi]
 //I did not steal this code

//Cookie Consent Alert Box

window.onload = function() {
   let userResponse = confirm("This website uses cookies to ensure you get the best experience. Do you accept?");
    
     if (userResponse) {
        alert("Thank you for accepting cookies!");
     } else {
         alert("You declined cookies. Some features might not work as expected.");
     }
};
