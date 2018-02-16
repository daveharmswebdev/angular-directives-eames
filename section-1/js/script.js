angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.user1 = {
        name: 'Captain America',
        address: {
            street: '3608 Sperry Ave',
            city: 'Nashville',
            state: 'TN',
            zip: 37215
        },
        friends: ['Dr. Stranger', 'Iron Man', 'Thor']
    }
    $scope.user2 = {
        name: 'Dare Devil',
        address: {
            street: '123 Any Street',
            city: 'New York',
            state: 'NY',
            zip: 12345
        },
        friends: ['Captain America', 'Jessica Jones', 'Punisher']
    }
    
})

angular.module('app').directive('userInfoCard', function() {
    return {
        templateUrl: 'userInfoCard.html',
        restrict: 'E',
        scope: {
            user: '='
        },
        controller: function($scope) {
            $scope.collapsed = false;
            $scope.knightMe = function(user) {
                user.rank = "knight";
            }
            $scope.collapse = function() {
                $scope.collapsed = !$scope.collapsed;
            }
        }
    }
})

angular.module('app').directive('address', function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'address.html',
        controller: function($scope) {
            $scope.collapsed = false,
            $scope.collapseAddress = function() {
                $scope.collapsed = true;
            }
            $scope.expandAddress = function() {
                $scope.collapsed = false;
            }
        }
    }
})