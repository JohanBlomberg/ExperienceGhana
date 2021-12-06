async function UpdateBlogPost () {
try {
 let response = await fetch ('http://localhost:5000/posts')

    if (!response.ok){
    throw new Error ('Network problem')
        }

        let data = response.json();
        console.log(data);
}catch (error){
    console.log(error)
}

}

UpdateBlogPost();

let submitBtn = document.getElementById('submitFormBtn')

submitBtn.addEventListener("click", function(){
    location.assign('index.html')
})