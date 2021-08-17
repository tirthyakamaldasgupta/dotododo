$(document).ready(function() {
    $("#login-button").click(function() {
        $("#login-modal").addClass("is-active");
    });

    $("#modal-close").click(function() {
        $("#login-modal").removeClass("is-active");
    });

    $("#cancel-button").click(function() {
        $("#login-modal").removeClass("is-active");
    });
});

