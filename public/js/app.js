
$(documento).ready(function() {
	 $(".cell").click(function(event) {
        var pathname = window.location.pathname;
        var ruta = pathname + event.target.id;
         $.get(ruta, function(data) {
            if (data == 'illegal'){
                alert("Illegal move!");
                } 
            else if (data.length < 3)  {
                if (data.length > 0){
                    $("#"+event.target.id).addClass("circle");
                    $("#"+data).addClass( "cross" );
                }
                
});
