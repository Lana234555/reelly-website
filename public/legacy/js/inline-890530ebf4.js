
//attach a click handler to the button to make it transform when clicked, via our transform() function below
    document.querySelector("[data-transform]").addEventListener("click", transform);
    //flag of whether or not it is a password field or text field
    var isPassword = true;
    //this function will toggle the input between being a password or a text input
    function transform() {
        //copy the element itself, its html source, and value text to a variable
        var myInput = document.querySelector("[data-show]");
        var oldHtml = myInput.outerHTML;
        var text = myInput.value;
        if (isPassword)
        {
            //replace "password" with "text" in the html if it is a password field
            var newHtml = oldHtml.replace(/password/g, "text");
        }
        else
        {
            //replace "text" with "password" if it is a text field
            newHtml = oldHtml.replace(/text/g, "password");
        }
        //update the html
        myInput.outerHTML = newHtml;
        //restore the text value
        myInput = document.querySelector("[data-show]");
        myInput.value = text;
        //toggle the isPassword flag
        isPassword = !isPassword;
    }
