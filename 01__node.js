$(document).ready({
    getHtmlDocName()
})
function getHtmlDocName() {
    var str = window.location.href;
    if(str.lastIndexOf(".")){
        str = str.substring(str.lastIndexOf("/") + 1);
        str = str.substring(0, str.lastIndexOf("."));
    }
    $.ajax({
        url: 'https://mapi.mingjia100.net/api/page/get_page',
        data: { route: str },
        type: 'post',
        dataType: 'json',
        success: (e) => {
            console.log(e)
            $('.info').html(`${e.data.content}`)
        }
    })
}
