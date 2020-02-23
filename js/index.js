function onResize() 
{
    $(".nav-break").css("padding-top", $(".nav").css("height"));
    $(".main").css("padding-bottom", $(".end").css("height"));
}

// Navigator - START

function viewContact()
{
    if ($(".float-nav").css("width") != "0px") slideHorizontal(".float-nav", "100%");
    scrollTo(".contact");
}

// Navigator - END