(function() {
  function Message($firebaseArray, $cookies, $filter) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    var d = new Date();


    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };
      
    Message.send = function(newMessage, id) {
        // Send method logic
        messages.$add({content: newMessage, roomId: id, username: $cookies.get('blocChatCurrentUser'), sentAt: $filter('date')(d, 'shortTime')});
    };
      
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();