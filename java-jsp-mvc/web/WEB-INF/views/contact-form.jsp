<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: samirazein
  Date: 4/9/20
  Time: 11:23 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>CS472-WAP-Lesson13 JSP-MVC</title>
    <!--    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css" rel="stylesheet" integrity="sha384-uhut8PejFZO8994oEgm/ZfAv0mW1/b83nczZzSwElbeILxwkN491YQXsCFTE6+nx" crossorigin="anonymous">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<%@include file="../fragments/header.jsp" %>

    <h3>Customer Contact Form</h3>
        <div class="container">
            <form id="contactForm" method="post" action="${pageContext.request.contextPath}/contact-messages">

                    <c:forEach var="errorData" items="${errors}" varStatus="iteration">
                        <p style="color: red"><c:out value="${errorData}"></c:out></p>
                    </c:forEach>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="customerName">*Name</label>
                                <input type="text" class="form-control" id="customerName" name="customerName"
                                       aria-describedby="nameHelp" placeholder="John H. Smith" required>
                                <small id="nameHelp" class="form-text text-muted">Enter your full name.</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group required custom-control custom-radio">
                                <label for="male">*Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label" for="male"><input type="radio" id="male" name="gender" value="Male" checked class="form-check-input">&nbsp;Male</label>&nbsp;&nbsp;
                                    <label class="form-check-label" for="female"><input type="radio" id="female" name="gender" value="Female" class="form-check-input">&nbsp;Female</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="category">*Category</label>
                                <select class="form-control" id="category" name="category">
                                    <option value="" selected>Select a category</option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Inquiry">Inquiry</option>
                                    <option value="Complaint">Complaint</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="message">*Message</label>
                                <textarea class="form-control" id="message" rows="4" name="message" placeholder="Message goes here..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                       <div class="col-md-12">
                           <div class="">
                               <button type="submit" id="submitForm" name="button" class='btn btn-primary btn-lg btn-block'>
                                   Submit</button>
                           </div>
                       </div>
                    </div>

            </form>
    </div>

    <footer class="footer">
        <div id="footer-content">
            <span class="text-muted">Z. Samira : : : CS472-WAP</span>
            <span style="float:right;" class="text-muted">&copy; April 2020</span>
        </div>
    </footer>



</body>
</html>
