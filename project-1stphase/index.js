const button = document.querySelectorAll('.button')
console.log(button)
const body = document.querySelector('body')
console.log(body)


button.forEach(function (buttons)
{
    console.log(buttons)
    buttons.addEventListener('click',function(e)
{
    console.log(e)
    console.log(e.target)
    if(e.target.id === "red")
    {
        body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id === "Blue")
    {
        body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "Orange")
    {
        body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "Yellow")
    {
        body.style.backgroundColor = e.target.id;
    }
    else{
        body.style.backgroundColor = 'white'
    }
    
})

})
