{
  //

  class Counter {
    static totalLoginUser: number = 0;

    static loginUser() {
      this.totalLoginUser += 1;
    }
    static logoutUser() {
      this.totalLoginUser -= 1;
    }
  }







  Counter.loginUser()
  Counter.loginUser()
  Counter.loginUser()
  Counter.loginUser()

  console.log( `Online user: `, Counter.totalLoginUser) // Total user 4 

  Counter.logoutUser()
  Counter.logoutUser()
  Counter.logoutUser()

  console.log( `Online user: `, Counter.totalLoginUser) // Total user 1

  //
}
