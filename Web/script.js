$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
      
          window.location.hash = hash;
        });
      } 
      
    });
  });

  $(document).ready(function(){
    var boto = document.getElementById("boto");
    window.onscroll = function() {funciopujar()};
   
    function funciopujar() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 300) {
        boto.style.display = "block";
        
      } else {
        boto.style.display = "none";
      }
    }
    
  });
  function pujar() {
    $('html, body').animate({scrollTop: 0}, 1200);

  }