var accountList = [];
var accountObject = (function () {
    var accountTemplate = {
        accountName: '',
        depositAmount: 0
    };
    var createAccount = function (accountName, depositAmount) {
        var newAccount = Object.create(accountTemplate);
        newAccount.accountName = accountName;
        newAccount.depositAmount = depositAmount;
        return newAccount;
    };
    return {
        createAccount: createAccount
    };

})();

window.onload = function () {
    var createAccountButton = document.getElementById("createNewAccount");
    createAccountButton.onclick = addAccount;
};
function addAccount() {
    const accountName = document.getElementById("accountName").value;
    const depositAmount = document.getElementById("depositAmount").value;


    if (accountName === '' || depositAmount === '') {
        return;
    }

    var newAccount = accountObject.createAccount(accountName, depositAmount);
    accountList.push(newAccount);
    let accountsDisplay = document.getElementById("accountsDisplay");
    accountsDisplay.value = '';
    for (let i = 0; i < accountList.length; i++) {
        accountsDisplay.value += "\n Account name: " + accountList[i].accountName + " Balance: " + accountList[i].depositAmount;
    }

    document.getElementById("accountName").value = '';
    document.getElementById("depositAmount").value = '';

}