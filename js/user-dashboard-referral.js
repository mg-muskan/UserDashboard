let copyText = document.getElementById('user-dashboard-referral');
let copyReferral = document.getElementById('user-dashboard-ref-copy');

copyReferral.addEventListener('click', function() {
    
    copyText.select();
    copyText.setSelectionRange(0, 149);
    copyText.classList.add('active');
    copyReferral.classList.add('active');

    navigator.clipboard.writeText(copyText.value).then(() => {
        // window.getSelection().removeAllRanges();
        setTimeout(function() {
            copyReferral.classList.remove('active');
            copyText.classList.remove('active');
        }, 1500);
    });

})
