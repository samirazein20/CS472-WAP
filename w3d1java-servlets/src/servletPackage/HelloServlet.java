package servletPackage;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "HelloServlet", urlPatterns = {"/index.html"})
public class HelloServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public HelloServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");

        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
        PrintWriter printWriter = response.getWriter();
        String helloMessage = "<html lang=\"en\">\n" +
                "\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\"\n" +
                "        integrity=\"sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu\" crossorigin=\"anonymous\">\n" +
                "\n" +
                "    <title>Homepage</title>\n" +
                "</head>\n" +
                "\n" +
                "<body>\n" +
                "    <nav class=\"navbar navbar-light\" style=\"background-color: #e3f2fd;\">\n" +
                "        <div class=\"container-fluid\">\n" +
                "            <!-- Brand and toggle get grouped for better mobile display -->\n" +
                "            <div class=\"navbar-header\">\n" +
                "                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n" +
                "                    data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
                "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
                "                    <span class=\"icon-bar\"></span>\n" +
                "                    <span class=\"icon-bar\"></span>\n" +
                "                    <span class=\"icon-bar\"></span>\n" +
                "                </button>\n" +
                "                <a class=\"navbar-brand\" href=\"#\">CS472-WAP ::: Lab11</a>\n" +
                "            </div>\n" +
                "\n" +
                "            <!-- Collect the nav links, forms, and other content for toggling -->\n" +
                "            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
                "                <ul class=\"nav navbar-nav\">\n" +
                "                    <li><a href=\"./index.html\">Home</a></li>\n" +
                "                    <li><a href=\"#\">About</a></li>\n" +
                "                    <li><a href=\"" + baseUrl + "/contact-us\">Contact Us</a></li>\n" +
                "                </ul>\n" +
                "                <ul class=\"nav navbar-nav navbar-right\">\n" +
                "                    <li><a href=\"#\">Hello!</a></li>\n" +
                "                    <button type=\"button\" class=\"btn btn-default navbar-btn\">Sign Out</button>\n" +
                "                </ul>\n" +
                "            </div><!-- /.navbar-collapse -->\n" +
                "        </div><!-- /.container-fluid -->\n" +
                "    </nav>\n" +
                "\n" +
                "\n" +
                "\n" +
                "    <div class=\"container\">\n" +
                "    <div class=\"jumbotron card-background\">\n" +
                "\n" +
                "        <h1>Hello, world of HttpServlet 4.0</h1>\n" +
                "        <h3>Welcome to Lab 11</h3>\n" +
                "        <p>This is a simple hero unit, a simple jumbotron style component for calling extra attention to featured content or information </p>\n" +
                "\n" +
                "        <hr>\n" +
                "\n" +
                "        <p>It uses utility classes for typography and spacing to space content out within larger container</p>\n" +
                "  <a class=\"btn btn-primary navbar-btn\" href=\"" + baseUrl + "/contact-us\" role=\"button\">Learn more</a>\n" +
                "        \n" +
                "\n" +
                "    </div>\n" +
                "</div>\n" +
                " <footer style=\"float: right; position: fixed; bottom: 0; right: 0; margin-top: 20px; font-family: monospace;\">" +
                "        \n" +
                "        <div>Copyright &copy; 2020</div>\n" +
                "    </footer>\n" +
                "\n" +
                "    <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\"\n" +
                "        integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\"\n" +
                "        crossorigin=\"anonymous\"></script>\n" +
                "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\"\n" +
                "        integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\"\n" +
                "        crossorigin=\"anonymous\"></script>\n" +
                "    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"\n" +
                "        integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\"\n" +
                "        crossorigin=\"anonymous\"></script>\n" +
                "</body>\n" +
                "\n" +
                "</html>";
        printWriter.print(helloMessage);

    }
}
