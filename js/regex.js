(function() {
  // date pattern NOT completed
  const patterns = {
    userName: /^[a-z\d]{5,10}$/,
    email: /^([a-z\d\._-]+)@([a-z\d]+)\.([a-z]{2,5})(\.[a-z]{2,3})?$/,
    phone: /^\d{10}$/,
    date: /^(\d){2,2}/
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
  const init = () => {
    console.log("regexModule :: init :formFields : ", formFields);
  };
  return {
    init
  };
})();
