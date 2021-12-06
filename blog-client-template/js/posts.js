window.onload = function() {
    fetchAllBlogPosts();
}

async function fetchAllBlogPosts() {
    try {
        let response = await fetch('http://localhost:5000/posts');
        let blogPosts = await response.json();
        console.log(blogPosts);

        let blogPostsHTML = '';
        for(let blogPost of blogPosts) {
            let blogDate = new Date(blogPost.date);
            let formatedDate = `${blogDate.getFullYear()}-${blogDate.getMonth() + 1}-${blogDate.getDate()} ${blogDate.getHours()}:${blogDate.getMinutes()}`
            let id = blogPost._id

            blogPostsHTML += `
                
                <article class="each-blog-post">
                <h1>${blogPost.title}</h1>
                    <p>${blogPost.content} <br> <span class="date">- ${formatedDate}</span> </p>
                    <p>${blogPost.author}</p>
                    <i>${blogPost.tags}</i>
                    <a href="post.html" data-id="${id}"><i>Read more</i></a>
                        <a href="#">Update</a> |
                        <a href="#">Delete</a> 
                    </div>
                    </article>
               
            `
        }

        document.getElementById('blog-content').innerHTML = blogPostsHTML;
    } catch(error) {
        console.log(error);
    }

}
