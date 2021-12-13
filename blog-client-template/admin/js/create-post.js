window.onload = function() {
    createNewPost();
}

function createNewPost() {
    let form = document.getElementById('createForm');


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
            await fetch('http://localhost:5000/posts', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            })
        } catch(error) {
                console.log(error)
        }
       
        location.assign('index.html')
    });
}

