//handle diposit button event
document.getElementById('deposit-btn').addEventListener('click',function(){
    // get input deposit
    const depositField=document.getElementById('deposit-amount');
    const customerDepositText=depositField.value;
    const customerDeposit=parseFloat(customerDepositText);
    // get amount deposit
    const totalDeposit=document.getElementById('deposit-money');
    const dipositMoneyText=totalDeposit.innerText;
    const dipositMoney=parseFloat(dipositMoneyText);
    // sum of total money
    const toalNewdeposit= dipositMoney+customerDeposit;
    totalDeposit.innerText=toalNewdeposit


    // update account Balance

    const CustomerBalance=document.getElementById('toatal-money')
    const balanceText=CustomerBalance.innerText;
    const balance=parseFloat(balanceText);
    const totalBalance=balance+customerDeposit;
    CustomerBalance.innerText=totalBalance;


    // clean value
    depositField.value='';  
});

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField= document.getElementById('withdraw-amount');
    const withdrawMoneyText=withdrawField.value;
    const withdrawMoney=parseFloat(withdrawMoneyText); 
    /* //get deposit
    const totalDeposit=document.getElementById('deposit-money');
    const dipositMoneyText=totalDeposit.innerText;
    const dipositMoney=parseFloat(dipositMoneyText);
    // current Deposit sum
    const currentDeposit=dipositMoney-withdrawMoney;
    totalDeposit.innerText=currentDeposit;
 */

    //get withdraw
    const customerWithdraw=document.getElementById('total-withdraw')
    const withdrawText=customerWithdraw.innerText;
    const withdraw=parseFloat(withdrawText);

    const toalWitdrawMoney=withdrawMoney+withdraw;
    customerWithdraw.innerText=toalWitdrawMoney;


    //get balance
    const CustomerBalance=document.getElementById('toatal-money')
    const balanceText=CustomerBalance.innerText;
    const balance=parseFloat(balanceText);
    const totalBalance=balance-withdrawMoney;
    CustomerBalance.innerText=totalBalance;

     // clean value
     withdrawField.value=''; 

});