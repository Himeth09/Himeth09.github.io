let filepath = "scripts/about.json";
$(document).ready(function() {
    let counter=1;
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
            // $(tabsSelector).html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    let tabsSelector = "#tabs-"+counter;
                    $(tabsSelector).append(
                        "<p>" + value.text + "</p>"
                    );
                    console.log(tabsSelector);
                    counter++;
                });
            });
        }
    });

    $("#tabs").accordion({
        heightStyle: "content"
    });
});