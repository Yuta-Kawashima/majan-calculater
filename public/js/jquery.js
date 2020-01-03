$(function(){

    $('#countup').click(function(){
        var text = $('#one').text();
        console.log(text);
        text = int(text);
        text++;
        $(this).text(text);
    })
});