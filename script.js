window.addEventListener('load', function() {
    document.getElementById('loading').style.display = 'none';
})

window.onscroll = function(){
if (($(window).width() >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};