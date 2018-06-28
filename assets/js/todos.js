//check off specific todos by clicking on them
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});


// add a todo to the list when press 'Enter' key
$("input[type='text'").keypress(function(event){
    if(event.keyCode === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});


//toggle the + sign
$(".fa-plus").on("click", function(){
    $("input[type='text'").fadeToggle();
});