window.addEventListener('load', function() {
    if (!navigator.userAgentData.mobile) {
        document.getElementById('loading').style.display = 'none';
    }
})