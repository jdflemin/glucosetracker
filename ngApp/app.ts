namespace myglucosetracker {

    angular.module('myglucosetracker', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: myglucosetracker.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('loggedinmain', {
                url:'/loggedinmain',
                templateUrl: '/ngApp/views/loggedinmain.html',
                data: {
                   isLoggedIn: true //need to make the login info at the bottom, need to name a service
                },
                controller: myglucosetracker.Controllers.MyPageController,
                controllerAs: 'controller'
              })
              .state('doctorloggedin', {
                  url:'/doctorloggedin',
                  templateUrl: '/ngApp/views/doctorspage.html',
                  data: {
                     isLoggedIn: true, //need to make the login info at the bottom, need to name a service
                     privileges: 'D'
                  },
                  controller: myglucosetracker.Controllers.MyPageController,
                  controllerAs: 'controller'
            })
            .state('loggedinviewingothers', {
                url:'/loggedinviewingothers',
                templateUrl: '/ngApp/views/loggedinviewingothers.html',
                controller: myglucosetracker.Controllers.FriendsPageController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: myglucosetracker.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });
/*
    angular.module('myglucosetracker').run(($rootScope, $state, userService) => {
        $rootScope.$on('$stateChangeStart', (e, to) => {
          if (to.data && to.data.isLoggedIn) {
            if (!userService.getUserData()) {
              e.preventDefault(),
              $state.go('home');
            }
          }
        });
      });
*/

  angular.module('myglucosetracker').run(($rootScope, $state, userService, $window) => {
    $rootScope.$on('$stateChangeSuccess', (e, to) => {
      if($state.current.name) {
        $window.sessionStorage.setItem('previousState', $state.current.name);
      }
    });
    $rootScope.$on('$stateChangeStart', (e, to) => {
      if (to.data && to.data.isLoggedIn) {
        if (!userService.getUserData()) {
          e.preventDefault();
          $state.go('home');
        } else if (!validateUserPrivileges(userService.getUserRole(), to.data.privileges)) {
          e.preventDefault();
          $state.go($window.sessionStorage.previousState);
        }
      }
    });
  });

  function validateUserPrivileges(userRole, requiredRole) {
    return assignRoleValue(userRole) <= assignRoleValue(requiredRole);
  }

  function assignRoleValue(role) {
    switch(role) {
      case 'D':
        return 1;
      default:
        return 2;
    }
  }

}
