namespace myglucosetracker.Controllers {
  const LOGIN = 'login';
  const REGISTER = 'register'

   export class ModalController {
    public user;
    public username;
    public password;

    constructor(private $uibModalInstance, private $state, private userService) {}

    public ok(){
      this.$uibModalInstance.close();
    }

    public loginHere() {
      this.user = this.userService.loginOrRegister(this.username, this.password, LOGIN)
        .then(() => this.$uibModalInstance.close());
    }

    public registerHere() {
      this.user = this.userService.loginOrRegister(this.username, this.password, REGISTER)
        .then(() => this.$uibModalInstance.close());
    }
  }

  angular.module('myglucosetracker').controller('ModalController', ModalController);

}
