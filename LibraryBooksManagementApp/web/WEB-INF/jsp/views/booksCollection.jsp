<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 4/11/20
  Time: 10:10 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./vendor/animate/animate.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="./vendor/select2/select2.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="./vendor/perfect-scrollbar/perfect-scrollbar.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="./css/util.css">
    <link rel="stylesheet" type="text/css" href="./css/main.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<%@include file="../fragments/header.jsp" %>

<div class="container" id="booksCollections"><br>
    <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3">
            <button class="btn btn-block pull-right btnDesign" type="button">
                <a href="./book-form" style="color: white"><i class="fa fa-fw fa-lg fa-plus"></i><strong>Add Book</strong></a>
            </button>
        </div>
    </div><br>
    <div class="row">
        <div class="col-md-12">
            <div class="table100 ver1 m-b-110">
                <div class="table100-head">
                    <table>
                        <thead>
                        <tr class="row100 head">
                            <th class="cell100 column1">#</th>
                            <th class="cell100 column2">Book Isbn</th>
                            <th class="cell100 column3">Book Title</th>
                            <th class="cell100 column4">Over Due Fee</th>
                            <th class="cell100 column5">Publisher</th>
                            <th class="cell100 column6">Date Published</th>
                        </tr>
                        </thead>
                    </table>
                </div>

                <div class="table100-body js-pscroll">
                    <table>
                        <tbody id="bookContent">

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</div>
<%@include file="../fragments/footer.jsp" %>
<!--===============================================================================================-->
<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
<script src="./vendor/bootstrap/js/popper.js"></script>
<script src="./vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
<script src="./vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
<script src="./vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>

<!--===============================================================================================-->
<script src="./js/main.js"></script>
<script src="./js/libraryBooksCollection.js"></script>
<script>
    $('.js-pscroll').each(function () {
        var ps = new PerfectScrollbar(this);

        $(window).on('resize', function () {
            ps.update();
        })
    });
</script>
</body>
</html>
