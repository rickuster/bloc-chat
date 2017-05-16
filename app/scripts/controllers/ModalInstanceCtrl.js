//defines the action to perform when press buttons in the modal

(function(){
    function ModalInstanceCtrl($uibModalInstance){
        this.ok = function(name){
            $uibModalInstance.close(name);
        };
        
        this.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();