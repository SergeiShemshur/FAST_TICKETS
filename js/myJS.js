



    function from() {
        var xhr = new XMLHttpRequest();
        var findFrom = document.getElementById("findFrom").value;

        console.log(findFrom);
        findFrom = encodeURI(findFrom);
        var link = "http://booking.uz.gov.ua/en/purchase/station/" + findFrom;
        xhr.open("GET", link, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if($("#findFrom").val() != "") {
                    $(".autosuggest").show();
                    $(".autosuggest").empty();
                    var a = JSON.parse(this.responseText);
                    console.log(typeof a);
                    console.log(a.value[0].title);
                    var length = a.value.length;
                    console.log(length);
                    var m;

                            if(length>5){
                             m = 5;
                            }else m = length;

                    for (var i = 0; i < m; i++) {
                        var ul = document.getElementById("from");
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(a.value[i].title));
                        ul.appendChild(li);
                    }


                    $("ul.all li").click(function(){
                        console.log($(this).text());
                        $("#findFrom").val($(this).text());
                        $(".autosuggest").hide();
                    });


                    $("ul.all li").hover(function(){
                        $(this).addClass("hoverLi");
                    });

                    $("ul.all li").mouseover(function(){
                        $(this).removeClass("hoverLi");
                    })

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
                    var length = a.value.length;
                    console.log(length);
                    var m;

                    if(length>5){
                        m = 5;
                    }else m = length;

                    for (var i = 0; i < m; i++) {
                        var ul = document.getElementById("till");
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(a.value[i].title));
                        ul.appendChild(li);
                        li.onclick()
                    }

                    $("ul.all li").click(function(){
                        console.log($(this).text());
                        $("#findTill").val($(this).text());
                        $(".autosuggestTill").hide();
                    });


                }else  $(".autosuggestTill").empty();
            }
        };

        xhr.send();
    }

    var a = 0;
    function showtraininfo() {
        if (a == 0) {
            $('.trainInfo').slideDown(3000);
            a++;
        } else {
            $('.trainInfo').slideUp(2000);
            $('.trainInfo').slideDown(3000);
        }
    }





