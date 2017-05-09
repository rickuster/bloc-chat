(function() {
    function ModalCtrl($uibModal, Room) {
        this.open = function(){
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal'
            });
            
            modalInstance.result.then(function(data){
                Room.addRoom(data)
            });
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();