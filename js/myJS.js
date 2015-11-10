



    function from() {
        var xhr = new XMLHttpRequest();
        var findFrom = document.getElementById("findFrom").value;
        console.log(findFrom);
        findFrom = encodeURI(findFrom);
        var link = "http://booking.uz.gov.ua/en/purchase/station/" + findFrom;
        xhr.open("GET", link, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // document.getElementById("t").innerHTML = (this.responseText);
               // alert(this.responseText);

                if($("#findFrom").val() != "") {
                    $(".autosuggest").show();
                    $(".autosuggest").empty();
                    var a = JSON.parse(this.responseText);
                    console.log(typeof a);
                    console.log(a.value[0].title);
                    for (var i = 0; i < 5; i++) {
                        var ul = document.getElementById("from");
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(a.value[i].title));
                        ul.appendChild(li);
                    }
                }else  $(".autosuggest").empty();
            }
        };

        xhr.send();
    }

    function till() {
        var xhr = new XMLHttpRequest();
        var findTill = document.getElementById("findTill").value;
        console.log(findTill);
        findTill = encodeURIComponent(findTill);
        var link = "http://booking.uz.gov.ua/en/purchase/station/" + findTill;
        xhr.open("GET", link, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if($("#findTill").val() != "") {
                    $(".autosuggestTill").show();
                    $(".autosuggestTill").empty();
                    var a = JSON.parse(this.responseText);
                    console.log(typeof a);
                    console.log(a.value[0].title);
                    for (var i = 0; i < 5; i++) {
                        var ul = document.getElementById("till");
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(a.value[i].title));
                        ul.appendChild(li);
                    }
                }else  $(".autosuggestTill").empty();
            }
        };

        xhr.send();
    }
