fetch('http://www.cbr.ru/scripts/XML_daily.asp', {
    mode: "no-cors",
    method: "GET",
})
    .then(function(res) {
        return res.text();
    }).then(function(data) {
        console.log(data);
    })
