import { ReactDOM } from "react-dom";

function City (props) {
    return ( <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h1 class="text-3xl text-indigo-600 tracking-widest font-medium title-font mb-3">{props.cityName}</h1>
          <h1 class="md:text-5xl text-2xl font-medium title-font text-gray-900">{props.cityTemp} °C</h1>
        </div>
        <img alt="weather-image" class="lg:w-32 w-1/4 lg:h-auto h-64 object-cover object-center rounded" 
         src={`http://openweathermap.org/img/w/${props.image}.png`}></img>
      </div>
    </div>
  </section>
  )
}

export default City;


//{data.weather[0].icon}