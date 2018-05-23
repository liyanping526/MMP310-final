// document ready event
$(document).ready(function() {
    $('#search').on("keypress", function(event) {
        if (event.which == 13) {
         var query = this.value;
          var offset = Math.round(Math.random() * 1000);
          var API_KEY = '9019250-3484592369b9e6b60c4e68463';
          var URL = "https://pixabay.com/api/?key="
                      + API_KEY 
                      + "&q="
                      + query
                      + "&image_type=photo"
                      + "&per_page=5"
                      + "&offset="
                      + offset;

$.getJSON(URL, function(photo){
      
    document.getElementById('results').innerHTML = "";

             $.each(photo.hits, function(i, hit){
                  
                  const imgElem = $('<img>')
                  .attr('src', hit.largeImageURL);
        
                  $('#results').append("<img src='" + hit.largeImageURL + "'></img>");
                  console.log(hit.largeImageURL);
                  
                  
              });
     });
        }
    });
});