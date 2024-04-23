
var telegram_bot_id = "6414565524:AAGY2obKsjvpfyH8rnq4t9OWMPDgKHM8ddI";

var chat_id = -1002002478956;
var username, fullname, number, bank, account, product;
var ready = function () {
    username = document.getElementById("username").value;
    fullname = document.getElementById("fullname").value;
    number = document.getElementById("number").value;
    bank = document.getElementById("bank").value;
    account = document.getElementById("account").value;
    product = document.getElementById("product").value;
    message = "New Website Register" + 
                "\n " + 
                "\nUsername : " + username + 
                "\nFull Name : " + fullname + 
                "\nMobile Number : " + number + 
                "\nBank Type : " + bank + 
                "\nAccount : " + account + 
                "\nProduct : " + product + 
                "\n------------------------------------" + 
                "\nTo Customer" + 
                "\n " + 
                "\nTahniah !! Anda daftar di website *VR46* telah berjaya.🥳" + 
                "\n " + 
                "\nUsername : " + username + 
                "\nPassword : " + "************" + 
                "\n " + 
                "\nabang berminat cuba luck dekat game ape ya ? ❤️";

};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("username").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("number").value = "";
    document.getElementById("bank").value = "";
    document.getElementById("account").value = "";
    document.getElementById("product").value = "";
    return false;
};


function message(){
    var username = document.getElementById("username");
    var fullname = document.getElementById("fullname");
    var number = document.getElementById("number");
    var bank = document.getElementById("bank");
    var account = document.getElementById("account");
    var product = document.getElementById("product");
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(username.value === '' || fullname.value === '' || number.value === '' || bank.value === '' || account.value === '' || product.value === '') {
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            username.value = '';
            fullname.value = '';
            number.value = '';
            bank.value = '';
            account.value = '';
            product.value = '';
        },2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}