// const wrapper = document.querySelector('.wrapper');
// const element = document.createElement('div')
// // wrapper.after(element)
// // console.log(element.innerHTML = '<div class = jopa> jkfpq jwojdwp <div/>')
// // console.log(wrapper.children)
// const midleElem = wrapper.children[Math.floor((wrapper.children.length-1) / 2)]
// midleElem.after(element)
// const copyElem = midleElem.cloneNode()
// console.log(copyElem)
// midleElem.remove()
// const replacedElem = wrapper.replaceChild(wrapper.children[0], wrapper.children[1])
// console.log(replacedElem)
// wrapper.append(replacedElem)
let kostik = document.querySelector('.kostik') 
document.addEventListener('mousemove', event =>{
    kostik.style.position = "absolute"
    let counterLeft = 0
    let counterTop = 0
    setInterval(() => {
        if(counterLeft < event.clientX){
            counterLeft += event.clientX / 25
            counterTop += event.clientY / 25
        }
    
        kostik.style.left = counterLeft + 'px'
        kostik.style.top = counterTop + 'px'
        
        kostik.style.zIndex = 5
        
    }, 20);

})





const circle = document.createElement('div')
const circle2 = document.createElement('div')
const oval = document.createElement('div')

document.body.append(circle, circle2, oval)
circle.classList.add('leftEgg', 'Egg')
circle2.classList.add('rightEgg', 'Egg')
oval.classList.add('bolder')


circle.style.width = '200px'
circle.style.height = '190px'
circle.style.backgroundColor = 'blue'
circle.style.borderRadius = '100%'

circle2.style.width = '200px'
circle2.style.height = '190px'
circle2.style.backgroundColor = 'blue'
circle2.style.borderRadius = '100%'

oval.style.width = '500px'
oval.style.height = '100px'
oval.style.backgroundColor = 'red'
oval.style.borderRadius = '30%'
// oval.style.transform = 'rotate(180deg)
oval.style.position = 'absolute'
oval.style.margin = '150px 0 0 40px'
oval.style.top = '0' 

document.addEventListener('click', (event) => {
    if(event.target.style.backgroundColor === 'blue'){
        event.target.style.backgroundColor = 'red'
    }
    else{
        event.target.style.backgroundColor = 'blue'
    }
})

const arrAnalytics = []
document.addEventListener('click', (event) =>{
    arrAnalytics.push(event.target)
    console.log(arrAnalytics)
})
document.addEventListener('keydown', (event) => {
    event.preventDefault()
})

