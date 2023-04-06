$(document).ready(function () {
  $("#my-div").hide();

  $("#toggle-btn").click(function () {
    $("#my-div").toggle();

    var buttonText =
      $("#toggle-btn").text() == "Megjelenítés" ? "Elrejtés" : "Megjelenítés";
    $("#toggle-btn").text(buttonText);
  });
});

$(document).ready(function () {
  $("#input-field").on("keyup", function () {
    let charCount = $(this).val().length;

    $("#char-count").text(charCount);
  });
});

$(document).ready(function () {
  $("#toggle-password-btn").click(function () {
    let passwordField = $("#password-field");
    let passwordFieldType =
      passwordField.attr("type") === "password" ? "text" : "password";
    passwordField.attr("type", passwordFieldType);

    let buttonText =
      passwordFieldType === "password" ? "Megjelenítés" : "Elrejtés";
    $("#toggle-password-btn").text(buttonText);
  });
});

$(document).ready(function () {
  $("#temp-field").on("keyup", function () {
    let temp = $(this).val();

    let state = "folyékony";
    if (temp <= 0) {
      state = "szilárd (jég)";
    } else if (temp >= 100) {
      state = "légnemű (gőz)";
    }

    $("#state-display").text(state);
  });
});
