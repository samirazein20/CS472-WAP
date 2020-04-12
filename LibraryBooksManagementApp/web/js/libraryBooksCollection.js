
  // Created by IntelliJ IDEA.
  // User: user
  // Date: 4/11/20
  // Time: 11:15 AM
  // To change this template use File | Settings | File Templates.

  (function () {

     getBooksList();
      $('.js-pscroll').each(function () {
          var ps = new PerfectScrollbar(this);

          $(window).on('resize', function () {
              ps.update();
          })
      });

      $("#bookForm").submit(function (evt) {
          evt.preventDefault();
          let isbn = $("#isbn").val();
          let title = $("#title").val();
          let overdueFee = $("#overdueFee").val();
          let publisher = $("#publisher").val();
          let datePublished = $("#datePublished").val();

          console.log('datePublished +++++++++', datePublished);

          if (isbn === '' || isbn === null || title === '' || title === null || overdueFee === '' || overdueFee === null || publisher === '' || publisher === null || datePublished === '' || datePublished === null) {
              $('#saveBook').prop('disabled', true);
          }
          if(isbn === '' || isbn === null){
              $('#isbn').addClass('error');
          }else if(title === '' || title === null){
              $('#title').addClass('error');
          }else if(overdueFee === '' || overdueFee === null){
              $('#overdueFee').addClass('error');
          }else if(publisher === '' || publisher === null){
              $('#publisher').addClass('error');
          }else if(datePublished === '' || datePublished === null){
              $('#datePublished').addClass('error');
          }else{
              let url = 'https://elibraryrestapi.herokuapp.com/elibrary/api/book/add';
              let data = {
                  isbn: isbn,
                  title: title,
                  overdueFee: overdueFee,
                  publisher: publisher,
                  datePublished: datePublished
              };

              fetch(url, {
                  method: "post",
                  body: JSON.stringify(data),
                  headers: {
                      'Content-Type': 'application/json',
                  }
              }).then(function (response) {
                  console.log(response);
                  return response.json();
              }).then(function(responseData)  {
                  console.log(responseData);
                  document.getElementById('isbn').value = "";
                  document.getElementById('title').value = "";
                  document.getElementById('overdueFee').value = "0.00";
                  document.getElementById('publisher').value = "";
                  document.getElementById('datePublished').value = "";

                  // isbn = "";
                  // title = "";
                  // overdueFee = "0.00";
                  // publisher = "";
                  // datePublished = "";
                  // $.toast({
                  //     heading: 'Information',
                  //     text: 'Loaders are enabled by default. Use `loader`, `loaderBg` to change the default behavior',
                  //     icon: 'info',
                  //     loader: true,        // Change it to false to disable loader
                  //     loaderBg: '#9EC600'  // To change the background
                  // })
                  // $.toast({
                  //     heading: 'Success',
                  //     text: 'Book has been successfully saved.',
                  //     icon: 'success',
                  //     hideAfter: 2000,
                  //     position: 'bottom-center',
                  //     loader: true,        // Change it to false to disable loader
                  //     loaderBg: '#9EC600'  // To change the background
                  // });

              })
                  .catch(error => ( console.log(error)
                          // $.toast({
                          //     heading: 'Error',
                          //     text: 'An unexpected error occured while trying to save book.',
                          //     icon: 'error'
                          // })
                      )
                  );

          }
      })


  })();


function getBooksList() {

  fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
      .then((response) =>  {
        if(response.ok){
          return response.json();
        }else {
          return Promise.reject({status: response.status, statusText: response.statusText})
        }
      })
      .then(booksList => {
          let books = "";
          booksList.forEach(function (book, i) {
              books+=`<tr class="row100 body">\n
                                      <td class="cell100 column1">${i+1}</td>\\n 
                                      <td class="cell100 column2">${book.isbn}</td>\n 
                                      <td class="cell100 column3">${book.title}</td>\n
                                      <td class="cell100 column4">$${book.overdueFee}</td>\n
                                      <td class="cell100 column5">${book.publisher}</td>\n
                                      <td class="cell100 column6">${book.datePublished}</td>\n
                                  </tr>`
            $("#bookContent").html(books);
          })
      })
      .catch(err => {
        console.log("Error message: ", err.statusText);
        document.getElementById("divBooksList").innerHTML ;
      });
}


