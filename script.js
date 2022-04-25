window.addEventListener('load', function() {
    if (!navigator.userAgentData.mobile) {
        document.getElementById('loading').style.display = 'none';
    }
})

changetitle = document.getElementById('changetitle')

changeit.addEventListener('change', function() {
    document.title = changeit.value
});