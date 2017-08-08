//new post button
$('.newPostButton').on('click',openDialog);
//submit button
$('.newPostSubmit').on('click',newPost);
//cancel button
$('.newPostCancel').on('click',closeDialog);

//dialog container
let dialog = $('.dialogContainer');

//send new post data
function newPost(){
    let newPostMessage = $('.newPostMessage').val();
    let classSelection = $('#classSelect').val();
    let newPostData = {
        poster: 'default user',
        text: newPostMessage,
        class: classSelection
    };
    console.log(newPostData);
    $.post('/api/newpost', newPostData);
    closeDialog();
}
//open dialog box
function openDialog(){
    if( dialog.hasClass('hide')){
        $('.dialogContainer').removeClass('hide')
    }
    dialog.addClass('show');
}
//close dialog box
function closeDialog(){
        if( dialog.hasClass('show')){
            dialog.removeClass('show')
        }
        $('.newPostMessage').val('');
        dialog.addClass('hide');
}
