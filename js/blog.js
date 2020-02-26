$(".BlogSearch input.gsc-input").attr("placeholder", "Type here..");
addClass(".BlogSearch input.gsc-search-button", "btn btn-danger");
$(".BlogSearch input.gsc-search-button").replaceWith("<button class='gsc-search-button btn btn-danger' title='search' type='submit'><i class='fa fa-search' aria-hidden='true'></i></button>");
$(".blog-pager-older-link").html("Next");
$(".blog-pager-newer-link").html("Prev");
addClass(".home-link", "btn btn-primary");
addClass(".blog-pager-older-link", "btn btn-primary");
addClass(".blog-pager-newer-link", "btn btn-primary");

var tag = $(".Blog .post-outer .post-list-item .post-tag").html();
if (tag.includes("Online Judge")) 
{
    $(".Blog .post-outer .post-list-item .post-snippet").hide();
}