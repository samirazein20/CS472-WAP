<%--
  Created by IntelliJ IDEA.
  User: samirazein
  Date: 4/8/20
  Time: 10:43 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
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
<div class="container"><br>

    <fieldset style="border:4px solid  #d0efff; border-radius:8px; box-shadow:0 0 8px #d0efff;padding: 6px;">
        <legend style="text-align: left;margin-top:-15px; background-color: #007bff; color: #d0efff; border-radius:8px;">
            <h4 style="text-align: center;">Thank you! Your message has been received as follows:</h4>
        </legend>
            <span>Customer Name :&nbsp;&nbsp; <span class="contactData">${contactMessages.customerName}</span> </span><br>
            <span>Gender :&nbsp;&nbsp; <span class="contactData">${contactMessages.gender}</span> </span><br>
            <span>Category :&nbsp;&nbsp; <span class="contactData">${contactMessages.category}</span> </span><br>
            <span>Message :&nbsp;&nbsp; <span class="contactData">${contactMessages.message}</span> </span>
    </fieldset>
</div>
<footer class="footer">
    <div id="footer-content">
        <span class="text-muted">Z. Samira : : : CS472-WAP</span>
        <span style="float:right;" class="text-muted">&copy; April 2020</span>
    </div>
</footer>
</body>
</html>
