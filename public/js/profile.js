

$('#submit-post').on('click', async function(e) {
    e.preventDefault();

    var title = $('#blog-title').val().trim();
    var content = $('#blog-text').val().trim();
    var user_id = localStorage.getItem('user_id');

    console.log("title", title)
    console.log("content", content)


    await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({title, content, user_id}), 
        headers: {'Content-Type': 'application/json'}   
      
    
    });
})
