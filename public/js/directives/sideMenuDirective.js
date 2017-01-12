myApp.directive('sideMenuDirective', function(){
    return {
        restrict: 'E',
        templateUrl: '../../views/directives/sideMenuDirective.html',
        link: function(scope,element,attrs){
            var $sideMenuModal = $('.sidemenu-modal');
            var $closeMenu = $('.close-menu');

            //OPEN SIDEMENU
            $('.hamburger').on('click', function(){
                $sideMenuModal.addClass('sidemenu-modal-active');
            })

            //CLOSE SIDEMENU
            $closeMenu.on('click', function(){
                $sideMenuModal.removeClass('sidemenu-modal-active');
            })
        }
    }

})
