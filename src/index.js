
const exhibitTitle = document.querySelector("#exhibit-title")
const exhibitDescription = document.querySelector("#exhibit-description")
const exhibitImg = document.querySelector("#exhibit-image")
const commentsSection = document.querySelector("#comments-section")
const commentForm = document.querySelector("#comment-form")
const buyTicketsButton = document.querySelector("#buy-tickets-button")
const ticketsBought = document.querySelector("#tickets-bought")

fetch("http://localhost:3000/current-exhibits")
.then(res => res.json())
.then(data => {
    const firstExhibit = data [0]
    exhibitTitle.textContent = firstExhibit.title
    exhibitDescription.textContent = firstExhibit.description
    exhibitImg.src = firstExhibit.image

    const comments = firstExhibit.comments

    comments.forEach((comment) => {
        addComment(comment)
    })
})

function addComment(comment) {
    const createP = document.createElement("p")
        createP.textContent = comment
        commentsSection.append(createP)
}

commentForm.addEventListener("submit", e => {
    e.preventDefault()
    newComment = commentForm['comment-input'].value
    addComment(newComment)
    e.target.reset()
})

buyTicketsButton.addEventListener("click", e => {
    const currentTickets = parseInt(ticketsBought.textContent)
    const newTotal = currentTickets + 1 
    ticketsBought.textContent = `${newTotal} Tickets Bought`
})


