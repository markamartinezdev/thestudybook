let height = window.innerHeight;
$('.mainContainer').css('height',height - 2);
let chatContainer = $('.chatMessages')[0];
chatContainer.scrollTop = chatContainer.scrollHeight;