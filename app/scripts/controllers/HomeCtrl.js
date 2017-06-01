(function() {
    function HomeCtrl(Room, Message) {
        this.rooms = Room.all;
        this.roomName = null;
        this.message = null;
        this.visibility = null;
        this.roomId = null;
        this.form = {};
        this.setRoom = function(roomName){
            this.roomName = roomName;
        }
        this.setMessages = function(id){
            this.message = Message.getByRoomId(id);
        }
        this.showDiv = function() {
            this.visibility = true;
        }
        
        this.sendMessage = function(text, id) {
            Message.send(text, id);
        }
        this.setRoomId = function(id) {
            this.roomId = id;
        }
        this.clearForm = function () {
            this.testform.$setPristine();
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message', HomeCtrl]);
})();