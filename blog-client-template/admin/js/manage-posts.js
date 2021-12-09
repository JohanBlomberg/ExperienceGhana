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
            let getMonth = blogDate.getMonth()
            console.log(getMonth)
            /*Set name of month*/ 
            let month;
            switch(getMonth){
                case 0:
                month = "January";
                break;
                case 1:
                month = "February";
                break;
                case 2:
                month = "Mars";
                break;
                case 3:
                month = "April";
                break;
                case 4:
                month = "May";
                break;
                case 5:
                month = "June";
                break;
                case 6:
                month = "July";
                break;
                case 7:
                month = "August";
                break;
                case 8:
                month = "September";
                break;
                case 9:
                month = "October";
                break;
                case 10:
                month = "November";
                break;
                case 11:
                month = "December";
                break;
            }
            let formatedDate = `${blogDate.getDate()} ${month} ${blogDate.getFullYear()}`
            let id = blogPost._id

            dataTableBody.innerHTML += `
                
                <tr>
                <td><h1>${blogPost.title}</h1></td>
                <td><p>${blogPost.author}</p></td>
                <td>  <p><span class="date">${formatedDate}</span> </p> </td>
                  <td>  <i>${blogPost.tags}</i> </td>
                       <td> <button class="update-post"><a href="update-post.html?id=${id}">Update</a></button> | <button class="delete-post" data-id="${blogPost['_id']}">Delete</button> </td>
                        
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
    let updateButtons = document.getElementsByClassName('update-post');
    console.log(deleteButtons);
    console.log(updateButtons);

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


