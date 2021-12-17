window.onload = function() {
getSpecificBlogPost()
}
    let urlParams = new URLSearchParams(location.search)
    console.log(urlParams)
    let id = urlParams.get('id')
    console.log(id)
    let url = "http://localhost:5000/posts/"

        async function getSpecificBlogPost(){

            try {
                let response = await fetch(url + id)
            
                let specificBlogPost = await response.json()
             
                if (!response.ok){
                    throw new Error ('Network problem')
                }
                
                /*Get # before each tag*/
                let allTags =""
                specificBlogPost.tags.forEach(element => allTags += `#${element} `)
               
                
                let blogDate = new Date(specificBlogPost.date);
                /*Set name of month*/ 
                let month;
                    switch(blogDate.getMonth()){
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
                    /* Date and Time */
                    let formatedDate = `${blogDate.getDate()} ${month} ${blogDate.getFullYear()}`
                   
                    
                    let oneBlogPostHTML = `
                    <div id="blog-content">
                    <h1 id="one-post-headline">${specificBlogPost.title}</h1>
                    <div class="blog-img"><img src=${specificBlogPost.image}></div>
                    <p><strong><i>${formatedDate}</i></strong></p> 
                    <main id="one-frame">
                    
                    
                    <p>${specificBlogPost.content}</p>
                    <footer id="one-post-footer"> 
                    
                    <p class="author-one-post">Posted by: ${specificBlogPost.author}</p>
                    
                    <div><i>${allTags}</i></div>
                    </footer>
                    <a href="index.html" id="back">back</a>
                    </main>
                    </div>
            `
               document.getElementById('one-blog-post').innerHTML = oneBlogPostHTML 
                
            } catch (error) {
                console.log(error)
                
            }
        }
        
   