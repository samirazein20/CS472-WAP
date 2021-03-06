package edu.miu.cs.cs472.jspmvc.controller;

import edu.miu.cs.cs472.jspmvc.model.ContactMessage;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@WebServlet(name = "ContactMessageController", urlPatterns = {"/contact-messages"})
public class ContactMessageController extends HttpServlet {

    int counter;

    @Override
    public void init() throws ServletException {
        super.init();
        this.counter = 0;
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.counter++;

        String customerName = request.getParameter("customerName");
        String gender = request.getParameter("gender");
        String category = request.getParameter("category");
        String message = request.getParameter("message");

        System.out.println(customerName + " " + category + " " + gender + " " + message);

        List<String> errors = new ArrayList<>();
        if (customerName != null && customerName.equals("")) {
            errors.add("Please add a name");
        }
        if (gender != null && gender.equals("")) {
            errors.add("Please select gender");
        }
        if (category != null && category.equals("")) {
            errors.add("Please select a category");
        }
        if (message != null && message.equals("")) {
            errors.add("Please add a message");
        }
        if (errors.size() > 0) {
            System.out.println("errors ......" + errors);
            request.setAttribute("errors", errors);
            System.out.println("errors ......9999" + errors);
            request.getRequestDispatcher("/WEB-INF/views/contact-form.jsp").forward(request, response);
//            request.getRequestDispatcher("/WEB-INF/views/thank-you.jsp").forward(request, response);

        } else {
            request.setAttribute("customerName", customerName);
            request.setAttribute("gender", gender);
            request.setAttribute("category", category);
            request.setAttribute("message", message);

//            request.getRequestDispatcher("/contact-messages").forward(request, response);

//            List<ContactMessage> contactMessages = Arrays.asList(new ContactMessage(customerName, gender, category, message));
            ContactMessage contactMessages = new ContactMessage(customerName, gender, category, message);
            request.setAttribute("contactMessages", contactMessages);
            request.getRequestDispatcher("/WEB-INF/views/thank-you.jsp").forward(request, response);
        }


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}

