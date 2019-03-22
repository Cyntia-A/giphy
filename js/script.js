// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    
    var searchTerm = $('#search-term').val();
    var request_Url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&ra&api_key=dc6zaTOxFJmzC"
       
    $.ajax({
       url: request_Url,
       method: "GET",
       success: function(response){
           
           var random = Math.floor(Math.random() * 20);
           var Image = response.data[random].images.original.url;
            $('.text-center').append('<img src="' + Image + '"/>');       
           
       },
    });
    
  
});

