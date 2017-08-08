//send button even
$('.send').on('click',sendMessageButton);
//ender button even
$('.text').keypress(sendMessageEnter);


//send data when enter is pressed
function sendMessageEnter(keypress){
    //checks if enter key was pressed
    if(keypress.which == 13){
        //get input element
        let messageElement = $(keypress.target);
        //get post id fro parent container
        let postId = $(keypress.target).parents('.post').attr('data-postid');
        //checks if input has text
        if(messageElement.val().length > 0){
            //get input text
            let messageText = messageElement.val();
            //builds chat message object
            let chatMessageData = {
                user: 'default chat user',
                text: messageText,
                postId: postId
            };
            //sends chat object to server
            $.post('/api/newchatmessage',chatMessageData);
            messageElement.val('');
        }
    }
}

//send data when send button is pressed
function sendMessageButton(message){
    //gets target element sibling
    let messageElement = $(message.target).siblings('.text');
    //get post id from parent container
    let postId = $(message.target).parents('.post').attr('data-postid');
    //check if input has text
    if(messageElement.val().length > 0){
        //gets input text
        let messageText = messageElement.val();
        //builds data object to send
        let chatMessageData = {
            user: 'default chat user',
            text: messageText,
            postId: postId
        };
        //sends chat object tha sever
        $.post('/api/newchatmessage',chatMessageData);
        messageElement.val('');
    }
}