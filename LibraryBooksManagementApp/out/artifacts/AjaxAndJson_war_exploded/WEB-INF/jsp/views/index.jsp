<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 4/11/20
  Time: 10:12 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%@include file="../fragments/header.jsp" %>
<div class="container">
    <h2>Welcome to the eLibrary&nbsp;&reg;&nbsp;</h2>
    <hr>
    <div class="row">
        <div class="col-md-8">
            <div id="search-form_3">
                <form id="search-form_3" action="" method="" autocomplete="off">
                    <input id="book" style="border-radius: 25px !important;" autocomplete="off" type="text"
                           oninput="searchBook()" placeholder="Search Library Books"
                           onfocus="displaySearchResults()" class="search_3 dropbtn"/>
                </form>
            </div>
            <ul id="searchList" class="search-content scrollSearchList">

            </ul>
            <br>
        </div>

        <div class="col-md-3">
            <button type="button" id="search-buttons" class="btn btn-lg btn-block"><span
                    class="glyphicon glyphicon-search glyphicon-align-left"></span>Search...
            </button>
        </div>
        <div class="col-md-1"></div>

    </div>

    <div class="row">
        <div class="jumbotron"> <%-- myjumbotron--%>
            <h2 class="display-3">Hello there, &#128075;</h2>
            <p class="lead">Welcome to the elibrary &#128522;, we are a top-flight, fully digitized library. We have a
                variety of books and material to aid in your learning process.</p>
            <hr class="my-4">
            <p>For more information about us please click <a href="#">here</a>. You can take a vitual tour.<a href="#">here</a>.
            </p>

            <p class="lead">
            <p>Already have access as a member, librarian or system administrator ? Then simple sign up <a
                    href="#">here</a> to access the full range of services available to you. </p>

            <%--          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>--%>
            </p>
        </div>
    </div>

</div>
<%@include file="../fragments/footer.jsp" %>
<script>
    function trim(x) {
        return x.replace(/^\s+|\s+$/gm, '');
    }

    function displaySearchResults() {
        document.getElementById("searchList").classList.add("showSearch");
    }

    function searchBook() {
        $('#searchList').html('');
        let bookStr = $('#book').val();
        let book = trim(bookStr);
        let size = book.length;
        if (size > 0) {
            $.ajax("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
                .done(response => { //response will be a JSON object
                    console.log(response);
                    console.log(JSON.stringify(response));
                    console.log("userid is: " + response.userId);

                    if (response !== '' && response !== '[]' && response !== null) {
                        //alert("Response Not Empty:"+response);
                        $('#searchList').html('');
                        //document.getElementById('searchList').style.display = 'block';
                        let name = book.split("")[0];
                        let result = response;

                        let outputcontent = "";
                        for (index in result) {
                            let pid = result[index].pid;
                            outputcontent += '<li class="classItem desginsearchresults" onclick="clearSearchResult();">' +
                                '<div style="padding:5px;">' +
                                '<div class="partientsearchcard">' +
                                '<div class="profileinfo">' +
                                '<h7 style="font-weight: bolder"><span style="color: graytext">Book Isbn: </span> <span style="color: blueviolet; text-transform: uppercase;">' + result[index].isbn + '</span></h7><br>' +
                                '<span><span style="font-weight: bolder; color: graytext">Book Title: </span>' + result[index].title + '</span><br>' +
                                '<span><span style="font-weight: bolder; color: graytext">Publisher: </span>' + result[index].publisher + '</span><br>' +
                                '<span class="bio" style="white-space: nowrap;"><span style="font-weight: bolder; color: graytext; ">Date Published: </span> <span>' + result[index].datePublished + '</span></span><br>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</li>';
                        }
                        $('#searchList').html(outputcontent);

                    } else {
                        //alert("Response Empty");
                        $('#searchList').html('');
                        $('#searchList').append('<p class="center consentForm"><br>' +
                            '<span class=""style="cursor: pointer"><span style="color: black !important; text-decoration: underline">No Results found for ' + book + '</span>.<br>');

                    }
                });

        }
    }

    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("search-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('showSearch')) {
                    openDropdown.classList.remove('showSearch');
                    var personSearchvalue = $('#person').val();
                    personSearchvalue = capitalizestudentSearchResults(personSearchvalue);
                    document.getElementById("person").value = '';
                    $('#searchList').html('');
                }
            }
        }
    };

    function clearSearchResult() {
        $('#searchList').html('');
        //document.getElementById("searchList").style.display="none";
    }
</script>
</body>
</html>
