(function() {
    function HomeCtrl(Room, Message) {
        this.rooms = Room.all;
        this.roomName = null;
        this.message = null;
        this.setRoom = function(roomName){
            this.roomName = roomName;
        }
        this.setMessages = function(id){
            this.message = Message.getByRoomId(id);
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message', HomeCtrl]);
})();