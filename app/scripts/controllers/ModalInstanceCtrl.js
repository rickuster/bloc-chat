//defines the action to perform when press buttons in the modal

(function(){
    function ModalInstanceCtrl($uibModalInstance){
        this.ok = function(roomName){
            $uibModalInstance.close(roomName);
        };
        
        this.cancel = function(){
            $uibModalInstance.dismiss('close');
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();