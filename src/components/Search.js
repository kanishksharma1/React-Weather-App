import React, { useState } from "react";
import  axios  from "axios";
import Properties from "./Properties";
import  City  from "./City";
import  Form  from "./Form";


function Search () {
    const [data, setData] = useState({})
    const[city, setCity] = useState("")
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=861777e728ed93c1c5da2ccbd9a69882`

   
    const fetchData = (event)=>{
        if (event.key === "Enter") {
            axios.get([url]).then((response)=>{
                setData(response.data)
                console.log(response.data)
            })
            setCity('')

            

        }
    }

    function handleChange (Event) {
        setCity(Event.target.value)
    }
    return(
        <div>  

<Form 
          metropoliton = {city}
          handleChange = {handleChange}
          fetchData = {fetchData}
        />

{data.name !== undefined &&

<div>

        
       <City 
        cityName = {data.name}
        cityTemp = {data.main?.temp}
        image = {data.weather ? data.weather[0]?.icon : null}
       />

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <Properties 
        tempData = {data.main?.temp_min}
        description = "Minimum Temp"
        symbol = "°C"
      />
      <Properties 
        tempData = {data.main?.temp_max}
        description = "Maximum Temp"
        symbol = "°C"
      />
      <Properties 
        tempData = {data.main?.feels_like}
        description = "Feels Like."
        symbol = "°C"
      />
      <Properties 
        tempData = {data.main?.pressure}
        description = "Pressure."
        symbol = "hPa"
      />
      <Properties 
        tempData = {data.main?.humidity}
        description= "Humidity"
        symbol = "%"
      />
      <Properties 
        tempData = {data.wind?.speed}
        description = "Wind Speed"
        symbol = "m/s"
      />
      
    </div>
  </div>
</section>  

</div>

 
}
    </div>
    )
}

export default Search
