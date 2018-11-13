$(document).ready(function() {
    $('form').submit(function(e){
      e.preventDefault();
      let searchText = $('#search').val();
      let flickrData = {
        tags: searchText,
        format : 'json'
      };
      let flickrURL = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  
      function displayOptions (data){
        let statusHTML = '<ul>';
        $.each(data.items, function(i, photo){
          statusHTML += '<li class="grid-25 tablet-grid-50">';
          statusHTML += '<a src="' + photo.link + '">';
          statusHTML += '<img src="' + photo.media.m + '"></a></li>';
        })//end each method
        statusHTML += '</ul>';
        $('#photos').html(statusHTML);
      }
      
      
      
      
      $.getJSON(flickrURL, flickrData, displayOptions);
      
  }); //end form event
  
  

}); // end ready

//"http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//<li class="grid-25 tablet-grid-50">