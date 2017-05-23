//defines the action to perform when press buttons in the modal

(function(){
    function ModalInstanceCtrl2($uibModalInstance, $cookies){
        this.setusername = function(name){
            if (name == null || name == ""){
                alert("Invalid input! Please try again.");
            }
            else {
                $cookies.put('blocChatCurrentUser', name);
                $uibModalInstance.close(name);
            }

        };
        
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl2', ['$uibModalInstance', '$cookies', ModalInstanceCtrl2]);
})();