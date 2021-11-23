$(document).ready(function(){
    getJSON("facultyList.json");
});

function getJSON(filepath) {
    $.ajax({
        type: "get",
        url: filepath,
        beforeSend: function() {
            $("#faculty").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#faculty").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("main").append(
                        "<img src=" + value.image + " alt=" + value.first_name + "_picture>" +
                        "<h2>" + value.full_name + "</h2>" +
                        "<h3>" + value.department + "</h3>" +     
                        "<p>" + value.bio + "</p>"
                    );
                });
            });
        }
    });
}