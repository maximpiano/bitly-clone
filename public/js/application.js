$(document).ready(function(){
    $("h1").click(function(){
        $(this).hide();
    });
});


$(document).ready(function(){
	$('.form').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: '/urls', //this refers to the route post '/urls'
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
     success: function(data){
      //  data is the return result of running the above mentioned method url
      // write some code here to display the shortened URL

        if(data.short_url){

          var a = "<button onclick=\"copyToClipboard('.url_link')\">Copy to clipboard</button>"

          $("#table").html("Your shorten URL is <a class='url_link' href='" + data.short_url + "'>localhost:9393/" + data.short_url + "</a> </br>" + a);
        }
        else{

          $("#table").html(data);
        //   $("#table").html(data);
        }

      }  // end of success
    }); // end of function .ajax
  }); // end of function .submit
}); // end of function document.ready

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

