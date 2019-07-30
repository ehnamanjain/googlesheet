const theData = document.querySelector('#inputVals')
theData.addEventListener('submit', (e) => {
    e.preventDefault()
    const lname = e.target.elements.name.value
    const lcountry = e.target.elements.country.value
   location.assign(`\send?name=${lname}&country=${lcountry}`)
})