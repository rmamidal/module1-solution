(function() {
    var app = angular.module('LunchCheck', []);
    app.controller('LunchCheckController', ['$scope', function($scope) {
        $scope.lunchMenu = "";
        $scope.menuMessage = "";
        $scope.checkIfTooMuch  = function() {
            var menuItems = $scope.lunchMenu.split(",").filter(function(item) {
                return item.trim() != "";
            });

            if($scope.lunchMenu == "") {
                $scope.menuMessage = "Please enter data first";
            } else if(menuItems.length > 0 && menuItems.length <= 3) {
                $scope.menuMessage = "Enjoy!";
            } else if(menuItems.length > 3) {
                $scope.menuMessage = "Too much!";
            } else {
                $scope.menuMessage = "Entered something wrong in Textbox";
            }
        }
    }
]);
})();