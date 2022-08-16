// ===========================

// bank account page 

// ===============================


document.getElementById('btnSubmitDiposit').addEventListener('click', function () {
    let depositInput = document.getElementById('depositInput');
    // Get some html id
    const depositOutput = document.getElementById('depositOutput');
    const depositInputNumber = parseFloat(depositInput.value);
    const depositOutputNumber = parseFloat(depositOutput.innerText);
    const balenceOutput = document.getElementById('balenceOutput');
    const balenceOutputNumber = parseFloat(balenceOutput.innerText);
    if(depositInputNumber >0){
        // Deposit Input and Deposit Output Sum 
    depositOutput.innerText = depositOutputNumber + depositInputNumber;
    balenceOutput.innerText = depositInputNumber + balenceOutputNumber;
    }else{
        alert('Input vaid number')
    }
    // Step 7 Empty Input value
    depositInput.value = '';
})


document.getElementById('btnSubmitWithdraw').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrawInput');
    // Convert string to number
    const withdrawInputNumber = parseFloat(withdrawInput.value);

    const withdrawOutput = document.getElementById('withwdrawOutput');
    // Convert string to number
    const withdrawOutputNumber = parseFloat(withdrawOutput.innerText);
    //Balence Output 
    const balenceOutput = document.getElementById('balenceOutput');
    //convert string to number
    const balenceOutputNumber = parseFloat(balenceOutput.innerText);
    // Sum 
    if (withdrawInputNumber <= balenceOutputNumber ) {
        withdrawOutput.innerText = withdrawInputNumber + withdrawOutputNumber;

        //remove number after withdraw
        balenceOutput.innerText = balenceOutputNumber - withdrawInputNumber;
    }else if(withdrawInputNumber > balenceOutputNumber){
        alert("You can't withdraw over your balence");
    }else{
        alert('Input valid number');
    }


    // Empty Input after click
    withdrawInput.value = '';

})