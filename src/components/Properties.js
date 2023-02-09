import { ReactDOM } from "react-dom";

function Properties (props) {
    return(
    <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <h2 class="text-3xl text-gray-900 font-medium title-font mb-2">{props.tempData} {props.symbol} </h2>
          <p class=" leading-relaxed text-xl text-indigo-600">{props.description}</p>
        </div>
      </div>
    )
}

export default Properties