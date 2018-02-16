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
            user: '=',
            initialCollapsed: '@collapsed'
        },
        controller: function($scope) {
            $scope.collapsed = ($scope.initialCollapsed === 'true');
            $scope.knightMe = function(user) {
                user.rank = "knight";
            }
            $scope.collapse = function() {
                $scope.collapsed = !$scope.collapsed;
            },
            $scope.removeFriend = function (friend) {
                var idx = $scope.user.friends.indexOf(friend);
                if (idx > -1) {
                    $scope.user.friends.splice(idx, 1);
                }
            }
        }
    }
})

angular.module('app').directive('removeFriend', function() {
    return {
        restrict: 'E',
        scope: true,
        template: `
            <span
                class="glyphicon glyphicon-remove"
                style="cursor:pointer"
                ng-click="startRemove()"
                ng-hide="remvoing"
            ></span>
            <span ng-show="removing">
                <button class="btn btn-xs btn-success" ng-click="confirmRemove()">Remove</button>
                <button class="btn btn-xs btn-danger" ng-click="cancelRemove()">Never Mind</button>
            </span>
        `,
        scope: {
            notifyParent: '&method'
        },
        controller: function($scope) {
            $scope.removing = false;
            $scope.startRemove = function () {
                $scope.removing = true;
            },
            $scope.cancelRemove = function () {
                $scope.removing = false;
            },
            $scope.confirmRemove = function () {
                $scope.notifyParent();
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
            },
            $scope.expandAddress = function() {
                $scope.collapsed = false;
            }
        }
    }
})