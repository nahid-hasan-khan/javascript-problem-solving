const boxes= document.querySelector(".container").children;

const randomBg=()=>{
    let val1=Math.ceil(0+Math.random()*233)
    let val2=Math.ceil(0+Math.random()*233)
    let val3=Math.ceil(0+Math.random()*233)

    return(`rgb(${val1},${val2},${val3})`)
}

Array.from(boxes).forEach(element => {
    element.style.backgroundColor=randomBg()
    element.style.color=randomBg()

});