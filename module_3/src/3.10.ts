{
  // Encapsulation
  class Bank {
    readonly acountNumber: number;
    name: string;
    private _balance: number;

    constructor(acountNumber: number, name: string, balance: number) {
      this.acountNumber = acountNumber;
      this.name = name;
      this._balance = balance;
    }

    set balance(amount: number) {
      this._balance += amount;
    }

    get balance() {
      return this._balance;
    }
  }
  //
}
