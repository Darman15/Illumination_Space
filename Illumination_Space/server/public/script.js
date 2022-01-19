

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const socials = document.getElementsByClassName('socials')[0]
const BigImage = document.getElementById('big-image');
const imgSlider = document.getElementById('img-slider');


// toggle for mobile
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    socials.classList.toggle('active')
});

let buyButton = document.querySelectorAll('.buyBtn');

buyButton.forEach((buyBtn) => {
    buyBtn.addEventListener('click', () => {
        fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [
                    {id: 1, quantity: 1},
                ]
            })
        }).then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({url}) => {
            console.log(url)
            window.location = url
        }).catch(e => {
            console.error(e.error)
        })
    })
})
