// write your code here
// console.log(imageCard)
//globals
const imageCard = document.querySelector('.image')
console.log(imageCard)
const likeButton = document.getElementById('like-button')
// console.log(likeButton)
//get req
fetch('http://localhost:3000/images/1')
.then(response => response.json())
.then(data => {
    renderDoggies(data)
})

//console.log(imageCard)
function renderDoggies(object) {
    // console.log(object)
    const img = document.createElement('img')
    img.src = object.image
    // console.log(img)
    imageCard.append(img)
    // console.log(imageCard)
    const comments = document.querySelector('.comments')
    // console.log(comments)
    // const objectComments = object.comments
    objectComments.forEach(comments.append(object.content))

    
const imageTitle = document.querySelector('.title')
imageTitle.textContent = object.title

}
likeButton.addEventListener('click', (e) => {
    let likes = number
    const likeCounter = document.getElementById('like-count')
    likeCounter.textContent = `${likes++} likes`
})

