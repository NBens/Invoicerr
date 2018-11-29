function showThenHide(div1, div2) {
    var download = document.getElementById(div1);
    download.style.display="block";
    var send = document.getElementById(div2);
    send.style.display="none";    
}

function replaceMessage() {
    var email = document.getElementById("email");
    var message = "Hi [RECEIVER],\n\nA new invoice has been created on your account. You may find a PDF of your invoice attached.\n\nThank you for your business!\n\nWith Regards,\n\n- [SENDER]";
    senderText = document.getElementById("sender").value;
    receiverText = document.getElementById("receiver").value;
    message = message.replace("[RECEIVER]", receiverText);
    message = message.replace("[SENDER]", senderText);
    email.value = message;
    
    var invoiceNumInput = document.getElementById("invoiceNumInput").value;
    var subject = document.getElementById("subject");
    if (invoiceNumInput.trim() != "") {
        subject.innerText = senderText + " : " + invoiceNumInput;
    } else {
        subject.innerText = senderText;
    }
}

function replaceCurrency() {
    var currency = document.getElementById("currency");
    var currencies = document.getElementsByClassName("currency");
    for (var i = 0; i < currencies.length;i++) {
        currencies[i].innerText = currency.value;
    }
}

function deleteItem(e) {
    e.parentElement.parentElement.parentElement.removeChild(e.parentElement.parentElement);
}

function createItem() {
    var e = document.createElement("tr");
    var data = '<td><input class="u-full-width" type="text" placeholder="Item Name or Description"></td><td><input class="u-full-width" type="text" size=4></td><td><input class="u-full-width" type="text" size=4></td><td><span class="tableTotals">0</span> <span class="currency">$</span> <i class="fa fa-times delete u-pull-right" onclick="deleteItem(this);"></i></a></td>';
    e.innerHTML = data;
    var tbody = document.getElementById("tbody");
    tbody.appendChild(e);
}