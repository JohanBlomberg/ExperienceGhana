window.onload = function() {
    fetchAllBlogPosts();
}

let dataTableBody = document.querySelector('#data-table tbody');

async function fetchAllBlogPosts() {
    try {
        let response = await fetch('http://localhost:5000/posts');
        let blogPosts = await response.json();
        console.log(blogPosts);

        
        for(let blogPost of blogPosts) {
            let blogDate = new Date(blogPost.date);
            let formatedDate = `${blogDate.getFullYear()}-${blogDate.getMonth() + 1}-${blogDate.getDate()} ${blogDate.getHours()}:${blogDate.getMinutes()}`
            let id = blogPost._id

            dataTableBody.innerHTML += `
                
                <tr>
                <td><h1>${blogPost.title}</h1></td>
                <td><p>${blogPost.author}</p></td>
                <td>  <p><span class="date">- ${formatedDate}</span> </p> </td>
                  <td>  <i>${blogPost.tags}</i> </td>
                       <td> <button><a href="update-post.html">Update</a></button> | <button class="delete-post" data-id="${blogPost['_id']}">Delete</button> </td>
                        
                    </div>
                    </article>
               </tr>
            `;
        }

        
    } catch(error) {
        console.log(error);
    }
    deletePostEvent();
}
//function deletePost(event) {
  //  event.target.parentNode.parentNode.remove();
//}


function deletePostEvent() {
    let deleteButtons = document.getElementsByClassName('delete-post');
    console.log(deleteButtons);

    for (let button of deleteButtons) {
        button.addEventListener('click', async function(e) {
            e.preventDefault();

            try {
                await fetch('http://localhost:5000/posts/' + e.target.dataset.id,
                    {
                        method: 'DELETE'
                    }
                );

                e.target.parentNode.parentNode.remove();
            } catch(error) {
                console.log(error)
            }

        })
    }
}



















//window.onload = function() {
//let blogPage = document.getElementById("blog-page-link");
//blogPage.addEventListener('click', function () {
 //   location.replace("index.html");
//})
//}


