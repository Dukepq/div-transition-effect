
const wrapper = document.querySelector('.wrapper-div')
const leftDiv = document.querySelector('.left-div')
const rightDiv = document.querySelector('.right-div')

// wrapper.addEventListener('mousemove', (e) => {
//     console.log(e.clientX)
//     const x = e.clientX
//     // const percentage = x / window.innerWidth
//     // console.log(percentage)
//     leftDiv.style.width = `${x}px`
// })

const whenMoving = (event) => {
    const x = event.clientX
    leftDiv.style.width = `${x}px`
}



wrapper.onmousemove = event => whenMoving(event);
wrapper.ontouchmove = event => whenMoving(event.touches[0]);