
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyhS8bRuZGtj9kaMl8Z_3aL4Zuu2I8VmeSQaCxi6Jd7VPRiuRinzWYgAWokwLImTBNo/exec'

  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Thankyou for Subscribing!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
