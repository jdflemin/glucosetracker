namespace myglucosetracker.Controllers {

  export class MyPageController {
    public newGlucose = {
      date: '',
      time: '',
      sugar: null
    };

  //  public glucose;
    public username;
  //  public myName;
    public userInfo = {
      bloodsugars: [],
      _id: ''
    };

    constructor(public userService, public $state, public $uibModal) {
      this.username = userService.getAllUsers();
      this.userInfo = userService.getUser(userService.getUserData());
    }

    public addGlucose() {
      this.userInfo.bloodsugars.unshift({
        date: this.newGlucose.date,
        time: this.newGlucose.time,
        sugar: this.newGlucose.sugar
      });
      this.userInfo._id = this.userService.getUserData();
      this.userService.createBloodSugar(this.userInfo).$promise;
      this.newGlucose.date = '',
      this.newGlucose.time = '',
      this.newGlucose.sugar = null
    }

    public deleteSugar(bloodsugar) {
      for(let i in this.userInfo.bloodsugars){
        if(this.userInfo.bloodsugars[i]._id === bloodsugar._id){
          this.userInfo.bloodsugars.splice(parseInt(i), 1)
        }
      }
      this.userService.createBloodSugar(this.userInfo).$promise;
    }

    public editGlucose(bloodsugar) {
      let modal = this.$uibModal.open({
        templateUrl:'/ngApp/views/editbloodsugar.html',
        controller: EditController,
        controllerAs: 'modal',
        resolve: {
          info: () => { return {bloodsugar: bloodsugar, userInfo: this.userInfo};}
        },
        size: 'md'
      })
    }

    public logout() {
      this.userService.logout();
    }

  }

}
