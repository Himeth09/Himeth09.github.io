let filepath = "scripts/prints.json";
$(document).ready(function(){
    $.ajax({
        type: "get",
        url: filepath,
        beforeSend: function() {
            $("#section").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#selection").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#selection").append(
                        "<div class=grid-item><img src=" + value.image + " alt=" + value.caption + " onclick=addOrder()></div>"
                    );
                });
            });
        }
    });
});