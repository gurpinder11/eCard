(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              alert("Card Successfully Saved !!!");
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

function isDigit(character) {
  const charCode = character.charCodeAt();
  return 48 < charCode && charCode < 57;
}

/* Input handling for Card Number */
$("#cardNumber").on("keyup change", function () {
  const cardNumber = $(this).val();

  $("#cardNumberLabel").html(cardNumber);
});

/* Input handling for Name */
$("#name").on("keyup change", function () {
  $("#nameLabel").html($(this).val());
});

/* Input handling for Valid Thru */
$("#validThru").on("keyup change", function () {
  const validThru = $(this).val();

  const pattern = $(this).attr("data-pattern");
  const slots = $(this).attr("data-slots");

  $("#validThruLabel").html(validThru);
});

/* Input handling for CVC */
$("#cvc").on("keyup change", function () {
  let cvc = $(this).val();
});
