

$('#submit-post').on('click', async function(e) {
    e.preventDefault();

    var title = $('#blog-title').text().trim()
    var content = $('#blog-text').text().trim()
    var user_id = localStorage.getItem('user_id');


    await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({title, content, user_id}), 
        headers: {'Content-Type': 'application/json'}   
      
    
    });
})
