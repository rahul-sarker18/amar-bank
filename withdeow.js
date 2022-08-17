/*
1. add event lisenar
2, input fild value
2.5 . clear the depojit input field after geating the value
4. privas dipojit total
5. calclulate new depojit total and set the value to the depojit total
6.balance  amount slect  and type cange


*/

document.getElementById('withdro-btn').addEventListener('click', function(){
    // step2
    const withdroInputElement =document.getElementById('withdeow-input');
    const withdeowInputString = withdroInputElement.value;
    const newWithdrowAmount =parseFloat(withdeowInputString);

    if(isNaN(withdeowInputString)){
        alert('kjdfs')
        withdroInputElement.value = '';
        return 0;
    }
    
    withdroInputElement.value = '';

    // step4
    const withdroTotalElemant = document.getElementById('withdro-total');
    const withdeoTotalString = withdroTotalElemant.innerText;
    const privasWithdroTotal = parseFloat(withdeoTotalString);

    // step5

    const totalWithdeoMony = newWithdrowAmount + privasWithdroTotal;

    // step6
    const balanceDecpriton =document.getElementById('balance-total');
    const balanceDecpritonString = balanceDecpriton.innerText;
    const newBalanceDecpriton =parseFloat(balanceDecpritonString);

    if(newWithdrowAmount <= newBalanceDecpriton){
        
        withdroTotalElemant.innerText =totalWithdeoMony;
        
    }else{
        alert('tume fokir')
    }

    

    // step7
    if(newBalanceDecpriton >= newWithdrowAmount){
        const totalBalance = newBalanceDecpriton - newWithdrowAmount;
        balanceDecpriton.innerText = totalBalance;
    }
    
   

    
})