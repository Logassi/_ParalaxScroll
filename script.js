const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const upperTe = document.querySelector('.upperTe')
const lowerTe = document.querySelector('.lowerTe')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    upperTe.style.marginBottom = -value * 1.1 + 'px'
    lowerTe.style.marginBottom = -value * 1.2 + 'px'
})