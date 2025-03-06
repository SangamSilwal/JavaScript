const start = document.querySelector('#start')
const end = document.querySelector('#stop')

//Making random colors
function randomColor()
{
    const text = "0123456789ABCDE";
    let colorCode = '#'
    for(let i =0;i<6;i++)
    {
        code = Math.floor(Math.random()*16)
        if (code<15)
        {
            colorCode += text[code]
            code = null
        }
        
    }
    return colorCode
    
}

console.log(randomColor())
let colorInterval;
start.addEventListener('click',function(e){
    if(!colorInterval)
    {
        colorInterval = setInterval(changeBg,1000) 
    }
   
    function changeBg()
    {
        document.body.style.backgroundColor = randomColor()
    }
})

end.addEventListener('click',function(e){
    clearInterval(colorInterval)
    colorInterval = null
})