$(document).ready(function() {
	$('#nav_list li').click(function () {
        let title = $(this).children('a').attr('title');
        let filepath = "json_files/"+title+".json";
        getJSON(filepath);
    });
}); // end ready

function getJSON(filepath) {
    $.ajax({
        type: "get",
        url: filepath,
        beforeSend: function() {
            $("main").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("main").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("main").append(
                        "<h3>" + value.name + "</h3>" +
                        "<h1>" + value.title + "</h1>" +
                        "<h2>" + value.bio + "</h2>" +
                        "<img src=" + value.image + " alt=" + this.title + "_picture>" +
                        "<p>" + value.text + "</p>"
                    );
                });
            });
        }
    });
}