// Open link
function openLink(link, target) 
{
    if (target == null) target = "_self";
    window.open(link, target);
}

// Convert string or object to object
function convertObj(obj) 
{
    var converted;

    if (typeof obj == "string") 
    {
        converted = $(obj);
    } else 
    {
        converted = obj;
    }

    return converted;
}

// Scroll page to certain element
function scrollTo(obj) 
{
    var to = convertObj(obj);

    $([document.documentElement, document.body]).animate({
        scrollTop: to.offset().top
    }, 500);
}

// Slide horizontally from 0 to full width or vice versa
// Parameter: obj(object to slide), maxWidth(maximum width after slide)
function slideHorizontal(obj, maxWidth) 
{
    var ref = convertObj(obj);
    
    if (ref.css("width") == "0px") 
    {
        ref.show();
        ref.animate({
            width: maxWidth
        }, 200);
    } else 
    {
        ref.animate({
            width: "0"
        }, 200, function()
        {
            ref.hide();
        });
    }
}