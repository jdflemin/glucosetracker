namespace myglucosetracker.Controllers {

  export class FriendsPageController {
    public message = 'test will this show up';
    public username;

    constructor(public userService, public $state) {
      this.username = userService.getAllUsers();
    }

    public logout() {
      this.userService.logout();
    }

  }

//  angular.module('myglucosetracker').controller('MyPageController', MyPageController);

}
