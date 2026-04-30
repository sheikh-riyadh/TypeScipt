{
  // Access Modifier

  class Bank {
    public id: number;
    public name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number) {
      ((this.id = id), (this.name = name));
      this.balance = balance;
    }

    addMoney(amount: number) {
      this.balance += amount;
    }
    widrowMoney(amount: number) {
      this.balance -= amount;
      if (this.balance <= 0) {
        console.log(
          `Hi ${this.name} sorry to say you do not have enough balance`,
        );
        return;
      }
      console.log(
        `Hi ${this.name} after widrow your current balance is ${this.balance}`,
      );
    }

    getMoney() {
      console.log(`Hi ${this.name} your current balance is ${this.balance}`);
    }
  }

  //
}
