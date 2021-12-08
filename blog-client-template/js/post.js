window.onload = function() {
    getSpecificBlogPost()
}

let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams)
let id = urlParams.get("id")
console.log(id)





    // async function getSpecificBlogPost(id) {
    //     try {
    //         let response = await fetch(`http://localhost:5000/posts/${id}`);
    //         let post = await response.json();
    
    //         document.getElementById('blog-content').value = post.content;
    //     } catch(error) {
    //         console.log(error);
    //     }
    // }
    

