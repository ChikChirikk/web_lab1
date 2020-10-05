table = document.getElementById("table");



function load_table() {
    let data = Cookies.get("data");
    let input = "";
    if (data !== undefined && data !== "") {
        let arr_data = data.split(";");
        for (let i = 0; i < arr_data.length - 1; i++) {
            let values = arr_data[i].split(",");
            input += "<tr>"
            for (let j = 0; j < values.length; j++) {
                input += "<td>"
                input += values[j];
                input += "</td>"
            }
            input += "</tr>"
        }
        table.innerHTML += input;
    }
}

function clear_table() {
    cookies_data = "";
    document.cookie = encodeURIComponent("data") + '=' + (encodeURIComponent(""));
    table.innerHTML = " <tr>" +
        "<th>X</th>" +
        "<th>Y</th>" +
        "<th>R</th>" +
        "<th>Result</th>" +
        "<th>Script time</th>" +
        "<th>Time</th>" +
        "</tr>";
}