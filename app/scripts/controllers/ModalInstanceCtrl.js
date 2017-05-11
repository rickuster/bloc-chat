//defines the action to perform when press buttons in the modal

(function(){
    function ModalInstanceCtrl($uibModalInstance){
        this.data = {
            roomName:""  
        };
        this.ok = function(){
            alert('data entered was: ' + this.data.roomName);
            $uibModalInstance.close(this.data.roomName);
        };
        
        this.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();