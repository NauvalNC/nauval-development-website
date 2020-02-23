var main = $(".main");
var footer = $(".end");

function onResize() 
{
    main.css("padding-bottom", footer.css("height"));
}

// Navigator - START

function viewContact()
{
    if ($(".float-nav").css("width") != "0px") slideHorizontal(".float-nav", "100%");
    scrollTo(".contact");
}

// Navigator - END