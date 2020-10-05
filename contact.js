var table = document.getElementById("table");
let button = document.getElementById("button");
load_table();
let cookies_data = (Cookies.get("data") !== undefined && Cookies.get("data") !== "") ? Cookies.get("data") : "";
$('form').on('submit', function () {
    if (check_input()) {
        send();
    }
});

function send() {
    $.ajax({
        type: "POST",
        url: "processing.php",
        dataType: "json",
        data: $(this).serialize() + "&time_zone_offset=" + new Date().getTimezoneOffset(),
        beforeSend: function () {
            button.disabled = true;
        },
        success: function (data) {
            button.disabled = false;
            add_row(data.x, data.y, data.r, (data.result == 1 ? true : false), data.start_time, data.time);
        },
    });
}