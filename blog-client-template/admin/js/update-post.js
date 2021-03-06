
window.onload = function() {
    let queryString = location.search;       
    console.log(queryString);
    let urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('id'));

    getBlogPost(urlParams.get('id'));
    updateBlogPostEvent(urlParams.get('id'))
    

 async function getBlogPost(id) {
    try {
        let response = await fetch('http://localhost:5000/posts/' + id);
        
        if (!response.ok){
            throw new Error ('Network problem')
        }
        let blogPost = await response.json();
        document.getElementById('tags').value = blogPost.tags;
        document.getElementById('content-textarea').value = blogPost.content;
        document.getElementById('update-author').value = blogPost.author;
        document.getElementById('update-title').value = blogPost.title;
        document.getElementById('update-image').value = blogPost.image;
      
    } catch(error) {
        console.log(error);
    }
 }
}

 function updateBlogPostEvent(id) {
    let form = document.getElementById('updateForm');
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        let formData = new FormData(form);
        formDataObject = {
            "title": formData.get('title'),
            "author": formData.get('author'),
            "content": formData.get('content'),
            "image": formData.get('image'),
            "tags": formData.getAll('tags')

        }

        try {
            await fetch('http://localhost:5000/posts/' + id, {
                method: 'PATCH', // GET, POST, PATCH, DELETE.
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject)
            })
            
            location.replace('index.html');
        } catch(error) {
            console.log(error);
        }

    })

}





