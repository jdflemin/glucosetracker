namespace myglucosetracker.Controllers {

    export class HomeController {
        public message = 'Welcome, please select any button to get started!';

        constructor(private $uibModal, private $state){}

        public openAboutModal(){
          this.$uibModal.open({
            templateUrl: 'ngApp/views/aboutmodal.html',
            controller: 'ModalController',
            controllerAs: 'controller',
            size: 'md'
          });
        }

        public openLoginModal(){
          let modal = this.$uibModal.open({
            templateUrl: 'ngApp/views/loginmodal.html',
            controller: 'ModalController',
            controllerAs: 'controller',
            size: 'md'
          });

          modal.closed.then(() => this.$state.go('loggedinmain'))
         }


        public openSignUpModal(){
          let modal = this.$uibModal.open({
            templateUrl: 'ngApp/views/signupmodal.html',
            controller: 'ModalController',
            controllerAs: 'controller',
            size: 'md'
          });

          modal.closed.then(() => this.$state.go('loggedinmain'))
        }

    }


  //  angular.module('myglucosetracker').controller('HomeController', HomeController);


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
