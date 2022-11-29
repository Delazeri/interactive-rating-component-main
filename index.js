const ratingBack = document.getElementById('rating-back').style.display = 'none'
const submitButton = document.getElementById('submit')
const rates = document.querySelectorAll('.btn')
const rating = document.getElementById('rating')

submitButton.addEventListener('click', () =>{
    document.getElementById('rating-back').style.display = 'flex'
    document.getElementById('rating-front').style.display = 'none'
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})