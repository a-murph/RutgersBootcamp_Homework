$(document).ready(function () {
    $("body").on("click", "#submit-button", function () {
        var keyword = $("#keyword").val();
        var articleNumber = $("#article-number").val();
        var startYear = $("#start-year").val();
        var endYear = $("#end-year").val();

        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231&api-key=5f22c86521c340aaad440dea7cbb612f";
        console.log(queryUrl);


        $.ajax({
            url: queryUrl,
            method: 'GET',
        }).then(function (response) {
            console.log(response.response.docs[0].headline.main);
            console.log(response.response.docs[0].snippet);
            console.log(response.response.docs[0].web_url);
            $("#articletitle").text(response.response.docs[0].headline.main);
            $("#articlesnippet").text(response.response.docs[0].snippet);
            $("#articlelink").text(response.response.docs[0].web_url);
        }).fail(function (err) {
            throw err;
        });


    });
});