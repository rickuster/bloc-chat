(function() {
    function ModalCtrl($uibModal, Room) {
        this.open = function(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal',
                size: 'sm'
            });
            
            modalInstance.result.then(function(data){
                Room.addRoom(data);
            });
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();