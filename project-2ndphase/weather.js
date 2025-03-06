const submit = document.querySelector('.submit')
const cityName = document.querySelector('.weather')
let city;
let referenceTable = null;
submit.addEventListener('click',function(e){
    if(cityName.value !== '')
    {
        if(referenceTable != null)
        {
            referenceTable.remove();
        }
        city = cityName.value
        let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb4dc52ed1e5429a5bff6a4076148144`
        const xhr = new XMLHttpRequest();
        xhr.open('GET',requestUrl)
        xhr.onreadystatechange = function(){
            console.log(this.readyState)
            if(this.readyState === 4)
            {
                let response = JSON.parse(this.responseText)
                console.log(response)
                const pk = document.createElement('table')
                console.log(pk)
                pk.innerHTML = `
                 <tr>
            <th>City Name</th>
            <th>Weather Status</th>
            <th>Temperature</th>
        </tr>
        <tr>
            <td>${response["name"]}</td>
            <td>${response["weather"][0]["description"]}</td>
            <td>${(Number(response["main"]["temp"])-273).toFixed(1)}C</td>
            
        </tr>   
                `
                document.querySelector('.main').appendChild(pk)
                cityName.value = '';
                referenceTable = pk;
            }
        }
        xhr.send()
    }
})






