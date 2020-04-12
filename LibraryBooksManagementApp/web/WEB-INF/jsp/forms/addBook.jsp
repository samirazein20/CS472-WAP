<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 4/11/20
  Time: 3:23 PM
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

    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<%@include file="../fragments/header.jsp" %>

<div class="container"><br>
    <h2>New Book Form</h2>
    <div class="row" style="align-content: center">
        <p><strong>Note:</strong>Form feilds marked with asterik (*) are required.</p>
    </div><hr>
    <%--    action="${pageContext.request.contextPath}/contact-messages"--%>
    <form id="bookForm" method="post">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label>*Book title</label>
                    <input type="text" class="form-control form-control-lg" id="title" name="title"
                           aria-describedby="nameHelp" placeholder="Enter title" required>

                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>*ISNB</label>
                    <input type="text" class="form-control form-control-lg" id="isbn" name="isnb"
                           aria-describedby="nameHelp" placeholder="Enter Isnb" required>
                    <span id="errorshow"></span>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>*Over Due Fee</label>
                    <input type="text" class="form-control form-control-lg" id="overdueFee" name="overDueFee"
                           aria-describedby="nameHelp" placeholder="0.0" required>
                    <small id="nameHelp" class="form-text text-muted">Enter a valid decimal amount in dollars and cents,
                        no comas (e.g 1.99)</small>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>*Publisher</label>
                    <input type="text" class="form-control form-control-lg" id="publisher" name="publisher"
                           aria-describedby="nameHelp" placeholder="Enter publisher" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>*Date Published</label>
                    <div class='input-group date'>
                        <input type='date' id="datePublished" class="form-control form-control-lg" placeholder="yyyy-mm-dd"/>
<%--                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>--%>
                    </div>
                </div>
            </div>
        </div>
        <br>

        <div class="row">
            <div class="col-md-6"></div>

            <div class="col-md-6">
                <div class="row">
                    <div class="form-group col-md-12" style="float: right;">
                        <button type="reset" class="btn btn-secondary btn-lg col-md-4"
                                style="background-color: darkred;">Reset
                        </button>
                        <button type="submit" class="btn btn-primary btn-lg col-md-4 btnDesign" id="saveBook">Save
                            Book
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </form>
</div>
<%@include file="../fragments/footer.jsp" %>
<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
<script src="./vendor/bootstrap/js/popper.js"></script>
<script src="./vendor/bootstrap/js/bootstrap.min.js"></script>
<%--<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js" integrity="sha256-4iQZ6BVL4qNKlQ27TExEhBN1HFPvAvAMbFavKKosSWQ=" crossorigin="anonymous"></script>--%>
<%--<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"></script>--%>
<!--===============================================================================================-->
<script src="./vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
<script src="./vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
<script src="./js/libraryBooksCollection.js"></script>

<%--<script>--%>
<%--    $(function () {--%>
<%--        $('#datetimepicker1').datetimepicker;--%>
<%--    })--%>
<%--</script>--%>

</body>
</html>
