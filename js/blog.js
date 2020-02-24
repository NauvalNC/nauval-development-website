$(".BlogSearch input.gsc-input").attr("placeholder", "Type here..");
addClass(".home-link", "btn btn-danger");
addClass(".BlogSearch input.gsc-search-button", "btn btn-danger");
$(".BlogSearch input.gsc-search-button").replaceWith("<button class='gsc-search-button btn btn-danger' title='search' type='submit'><i class='fa fa-search' aria-hidden='true'></i></button>");
$(".blog-pager-older-link").html("Next");
$(".blog-pager-newer-link").html("Prev");
addClass(".blog-pager-older-link", "btn btn-danger");
addClass(".blog-pager-newer-link", "btn btn-danger");