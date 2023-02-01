const panels =  document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    })
})

function removeActiveClass()
{
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

const loadtext = document.querySelector('.load-text')
const bg = document.querySelector('.bg')


let load = 0

let int = setInterval(bluring, 30)

function bluring()
{
    load++

    if(load > 99)
    {
        clearInterval(int)
    }

    loadtext.innerText = `${load}%`
    loadtext.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter =  `blur(${scale(load, 0, 100, 30, 0)}px)`

    
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}