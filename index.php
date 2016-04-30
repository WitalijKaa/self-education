<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>THML title</title>
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.2.3.js"></script>
    <link rel="stylesheet" href="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/themes/blitzer/jquery-ui.css">
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/jquery-ui.js"></script>
    <script src="/javaScript/jQueryColorPlugin.js"></script>
    <script src="/javaScript/jQueryColorPluginExt.js"></script>
</head>
<body>
<h1>экспериментальная страница</h1>

<div id="accordion">
    <div>
        <h3>Section 1</h3>
        <div>
            <p>Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
        </div>
    </div>
    <div>
        <h3>Section 2</h3>
        <div>
            <p>Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna. </p>
        </div>
    </div>
    <div>
        <h3>Section 3</h3>
        <div>
            <p>Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui. </p>
            <ul>
                <li>List item one</li>
                <li>List item two</li>
                <li>List item three</li>
            </ul>
        </div>
    </div>
    <div>
        <h3>Section 4</h3>
        <div>
            <p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est. </p>
            <p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        </div>
    </div>
</div>

<br>
<br>
<br>
<br>

<article style="display: none">
<div>
<span>
<a href="http://edu.cbsystematics.com/video/ru">Видео обучение</a><br />
<a href="http://jquery.com">jQuery</a><br />
<a href="http://htmlbook.ru/">HTML-book</a>
</span>
</div>

<div><p>мало букафф</p></div>
<div><p>расс</p><p>дффа</p></div>
<div><p>трры</p><p>ччри</p></div>

<input type="checkbox" checked="checked">

<ul class="the-count">
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li id="five">кудатам 5</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам 10</li>
    <li data-desc="new can jojo">кудатам</li>
    <li data-desc="new-car jojo">кудатам</li>
    <li data-desc="new cat">кудатам</li>
    <li>кудатам</li>
    <li>кудатам 15</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам 20</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам 25</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам</li>
    <li>кудатам</li>
</ul>

<div id="animka" style="position: relative; width: 300px; height: 250px; border: 1px solid darkcyan; color: aliceblue"></div>
</article>

<script>

$(function () {

    $("#accordion")
        .accordion({
            icons:{
                header: "ui-icon-circle-arrow-e",
                activeHeader: "ui-icon-circle-arrow-s"
            },
            collapsible: true,
            header: "> div > h3",
            heightStyle: 'content'
        }).sortable({
        axis: "y",
        handle: "h3"
    });

    /*
    $("a[href^='http://']").css("color", "red");    // Выбор всех элементов "a", с атрибутом "href", который начинается c "http://"
    $("a[href$='.com']").css("color", "blue");      // Выбор всех элементов "a", с атрибутом "href", который заканчивается на ".com"
    $("a[href*='html']").css("color", "green");     // Выбор всех элементов "a", с атрибутом "href", который содержит "html"

    $("div:has(a)").css("border", "2px solid darkMagenta");
    $("div p:only-child").css("color", "darkMagenta");
    //$("li:even").css("background-color", "red");
    //$("li:odd").css("background-color", "red");
    $(".the-count li:nth-child(3n+1)").css("background-color", "lightblue");
    $("p:not(p:eq(3))").css("background-color", "lightgray");

    $("li[data-desc~='new']").css("background-color", "lightgray");

    setTimeout(theAnim, 12000);

    function theAnim() {
        $(".the-count").hide(3000);
        $(":animated").css("font-size", "20px");
    }

    $('#five').attr({kube: '', 'data-nice': 'pretty'});

    $("input").change(function () {
        var $input = $(this);
        $("p:eq(1)").html(
            ".attr( \"checked\" ): <b>" + $input.attr("checked") + "</b><br>" +
            ".prop( \"checked\" ): <b>" + $input.prop("checked") + "</b><br>") + "</b>";
    });

//    $("input").prop('checked', false);
//    $("input").removeAttr('checked');


//    $("div").on("click", function () {
//        if ($(this).is(":first-child")) {

    $("#animka").click(function () {
        $(this)
            .animate({ left: "200px" }, 800)
            .animate({ width: "800px" }, 600)
            .animate({'background-color': 'red'}, 600)
            .queue(function () {
                $(this).animate({'background-color': '#ff4500'}, 600);
                var divThis = this;
                setTimeout(function () {
                    $(divThis).css('background', "#ff4500");
                }, 600);
                setTimeout(function () {
                    $(divThis).css('background', "green");
                }, 1200);
                setTimeout(function () {
                    $(divThis).css('background', "darkblue");
                }, 1800);
                setTimeout(function () {
                    $(divThis).dequeue();
                }, 2200);
            })
            .animate({ left: "10px", top: "30px" }, 800);
    });

    */
});

</script>

</body>
</html>