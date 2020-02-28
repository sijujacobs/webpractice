(function() {
  // password pattern
  // At least one upper -lower - digit - special character(@#$)
  // MinMax 5-10 in length

  var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const patterns = {
    userName: /^[a-z\d]{5,10}$/,
    email: /^([a-z\d\._-]+)@([a-z\d]+)\.([a-z]{2,5})(\.[a-z]{2,3})?$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$])[a-zA-Z0-9@#$]{8,10}$/,
    date: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-((19|20)\d{2})$/
  };
  const formFields = document.querySelectorAll("input");
  formFields.forEach(input => {
    input.addEventListener("keyup", event => {
      let thisInput = event.target;
      let attrName = event.target.attributes.name.value;
      validateField(thisInput, patterns[attrName]);
    });
  });

  const validateField = (element, regex) => {
    if (regex.test(element.value)) {
      $(element)
        .removeClass("invalid")
        .addClass("valid");
    } else {
      $(element)
        .removeClass("valid")
        .addClass("invalid");
    }
  };
})();
