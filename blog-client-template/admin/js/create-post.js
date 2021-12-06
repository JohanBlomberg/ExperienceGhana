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
            "tags": formData.getAll('tags')
        }
        console.log(formDataObject)

        try {
            await fetch('http://localhost:5000/posts', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            })
        } catch(error) {

        }
    });
}

// let serializeForm = function (form) {
//     debugger;
//     var obj = {};
//     var formData = new FormData(form);

//     for (var key of formData.keys()) {
//         let inputData = formData.getAll(key);
// console.log(inputData)
//         if (inputData.length > 1) {
//             obj[key] = inputData;
//         } else {
//             obj[key] = inputData[0];    
//         }
//     }
    
//     // console.log(obj);
//     return obj;
// };