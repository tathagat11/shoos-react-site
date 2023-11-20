import { Link } from "react-router-dom"

function SliderItems(prop) {
  console.log(prop.item.name)
    return (
    <div>
        <div className="sliderItem">
            <img src={`/public/shoe${prop.item.code}.png`} alt="image" className="sliderImage" />
              <div className={"sliderBG item" +prop.item.code}></div>
              <h1 className="sliderTitle">{prop.item.name}</h1>
              <h2 className="sliderPrice">₹{prop.item.price}</h2>
              <Link to={`/product/:${prop.item.code}`} className="buyButton" href="/pages/shoe1page.html">BUY NOW!</Link>
          </div>
    </div>
  )
}

export default SliderItems