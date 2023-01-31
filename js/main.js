const choise = document.querySelectorAll('li');
const submit = document.querySelector('.submit');
const container = document.querySelector('.container')

submit.addEventListener('click', (e)=> {
    e.preventDefault();
    let select = document.getElementById('selected').innerText
    container.innerHTML = `<div class="backside-img-container">
    <img src="images/illustration-thank-you.svg" alt="">
  </div>
  <p class="rated">You selected ${select} out of 5</p>
  <h2 class="thank">Thank you!</h2>
  <p class="appriciate">We appriciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch!</p>`
})
choise.forEach(each => {
    each.addEventListener('click', ()=> {
        choise.forEach(each => each.removeAttribute('id'))
        each.setAttribute('id', 'selected')
    })
})
