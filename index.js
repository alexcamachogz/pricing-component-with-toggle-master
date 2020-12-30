const pricing = document.getElementById('pricing')
const monthly = document.querySelectorAll('.monthly')
const annually = document.querySelectorAll('.annually')
pricing.checked = true

pricing.addEventListener('click', () => {
  if (pricing.checked === true) {
    monthly.forEach(month => {
      month.classList.remove('hide')
    })
    annually.forEach(annual => {
      annual.classList.add('hide')
    })
  } else {
    monthly.forEach(month => {
      month.classList.add('hide')
    })
    annually.forEach(annual => {
      annual.classList.remove('hide')
    })
  }
})