'use strict'

class bankAccount{
    accountNumber;
    owner;
  
    constructor(accountNumber,owner){
      this.accountNumber = accountNumber
      this.owner = owner
      this.transactions = []
    }
  deposit(amt){
    if(amt > 0 ){
  let newTransaction = new transaction(amt,"deposit")
  this.transactions.push(newTransaction);
  }
  else{
    console.log("can't deposit an negative amount")
  }
  }
  balance(){
    let sum = 0;
    for (let i = 0; i < this.transactions.length; i++ ){
      let currentTransaction = this.transactions[i]
      sum = sum + currentTransaction.amount
    }
    return sum;
    
  }
  
  charge(payee,amt){
    this.balance();
    if(this.balance() >= amt){
       let newCharge = new transaction (-amt,payee)
       this.transactions.push(newCharge);
  
    }
    else{
      console.log("No enough funds to perform this transaction")
      
    }
    
  }
  
  }
  
  class transaction{
  payee;
  
  amount;
  
  date;
    constructor(amount,payee){
  
      this.payee = payee;
      this.amount = amount;
      this.date = new Date();
    }
  
  }
  //this class extends bankAccount class
   class savingAccount extends bankAccount{
     interestRate;
     constructor(accountNumber,owner,interestRate){
      super(accountNumber,owner);
      this.interestRate = interestRate 
     }
     //this method create an accrue Intererest on saving account
    accrueInterest(){
     let accruedI = 0;
     let period = 30;
    for (let i = 0; i < this.transactions.length; i++ ){
      let currentTransaction = this.transactions[i]
      accruedI = accruedI + currentTransaction.amount * this.interestRate * 30
    }
    return accruedI
    }
    balance(){
    let sum = 0;
    for (let i = 0; i < this.transactions.length; i++ ){
      let currentTransaction = this.transactions[i]
      sum = sum + currentTransaction.amount
    if(this.interestRate){
      return sum + this.accrueInterest()
    
    } 
    
  }
    } 
    
    
  }
  let acnumber1 = new bankAccount ('53174600','John Doe');
  let savingacc1 = new savingAccount ('531744000','Will simth',1/100);
  console.log(acnumber1.accountNumber)
  console.log(acnumber1.owner)
  acnumber1.deposit(100)
  console.log(`your checking account balance is ${acnumber1.balance()}`);
  acnumber1.charge("target",1000) // not allowed to charge the amount greater than the balance
  console.log(`your checking account balance is ${acnumber1.balance()}`);
  console.log(savingacc1.accountNumber)// saving account
  console.log(savingacc1.owner)
  savingacc1.deposit(80)
  console.log(`Your saving account  balance is ${savingacc1.balance()}`)
  console.log(`The accrueInterest is ${savingacc1.accrueInterest()}`) 