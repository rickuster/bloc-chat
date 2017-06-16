(function() {
    function HomeCtrl(Room, Message) {
        this.rooms = Room.all;
        this.roomName = null;
        this.message = null;
        this.newMessage = null;
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
        
        this.sendMessage = function(text) {
            Message.send(text, this.roomId); 
            this.newMessage = null;
        }
        
        this.setRoomId = function(id) {
            this.roomId = id;
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message', HomeCtrl]);
})();