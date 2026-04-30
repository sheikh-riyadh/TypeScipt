{
  // Setter and Getter

  class Bank {
    readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    get balance() {
      return this._balance;
    }

    set balance(amount: number) {
      if (amount <= 0) {
        console.log("Invalid amount");
      }
      this._balance += amount;
    }
  }




  const acount1 = new Bank(380883, "Riyadh", 300)
  console.log(acount1.balance)
  acount1.balance=10
  console.log(acount1.balance)



  //
}
