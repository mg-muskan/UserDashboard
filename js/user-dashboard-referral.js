let copyText = document.getElementById('user-dashboard-referral');
document.getElementById('user-dashboard-ref-copy').addEventListener('click', function() {
    // let inp = copyText.innerText;
    // inp.select();
    // document.execCommand('copy');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.innerText);
})
// copyText.select();
// copyText.setSelectionRange(0, 99999);
// navigator.clipboard.writeText(copyText.value);