namespace myglucosetracker.Controllers {

  export class EditController {
    private userInfo;

    constructor(private info, private $uibModalInstance, private userService) {
      console.log(info);
      this.userInfo = info.bloodsugar;
    }

    public save(bloodsugar) {
      this.userService.updateBloodSugar(this.info.bloodsugar, this.info.userInfo)
      this.$uibModalInstance.close();
    }

    public ok() {
      this.$uibModalInstance.close();
    }

  }

}
