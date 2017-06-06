namespace myglucosetracker.Services {

  class UserService {
    private userData;
    private USER_RESOURCE = this.$resource('/api/v1/users/:action')
    private UPDATE_RESOURCE = this.$resource('/api/v1/users/:id/bloodsugars/:bloodsugarid')

    constructor(private $resource, private $window, private $state) {}

    public loginOrRegister(username, password, action) {
      this.userData =  this.USER_RESOURCE.save({action: action}, {username: username, password: password})
        .$promise.then((data) => {
          if(data.token) {
            this.$window.sessionStorage.setItem('token', data.token);
            this.$window.sessionStorage.setItem('role', data.user.role);
          }

        });

      return this.userData;
    }

    public logout() {
      this.userData = null;
      this.$window.sessionStorage.removeItem('token');
      this.$state.go('home');
    }

    public getUserData() {
    return this.$window.sessionStorage.token;
    }

    public getAllUsers() {
      return this.USER_RESOURCE.query();  //user names
    }

    public getUser(id) {
      return this.USER_RESOURCE.get({action: id}); //gets individual user
    }

    public createBloodSugar(user) {
      return this.USER_RESOURCE.save({action: user._id}, user).$promise; //adds bloodsugar data
    }

    public updateBloodSugar(bloodsugar, user) {
      return this.UPDATE_RESOURCE.save({id: user._id, bloodsugarid: bloodsugar._id}, bloodsugar).$promise; //update blood sugar data (edit)
    }

    public getUserRole() {
      return this.$window.sessionStorage.role;
    }

  }

  angular.module('myglucosetracker').service('userService', UserService);

}
