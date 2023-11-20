import HeaderBottom from "../Header/HeaderBottom"
import { useEffect } from 'react';
import SliderItems from "../SliderItems/SliderItems";
import productItems from "../../data/products.json"
import './Home.css'

function Home() {
  useEffect(() => {
    const wrapper = document.querySelector('.sliderWrapper');
    const menuItems = document.querySelectorAll('.menuItem');

    const handleMenuItemClick = (index) => {
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
    };

    menuItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        handleMenuItemClick(index);
      });
    });

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener('click', handleMenuItemClick);
      });
    };
  }, []);
  return (
    <div>
      <HeaderBottom />
      <div className="slider">
        <div className="sliderWrapper">
          <SliderItems item={productItems[0]}/>
          <SliderItems item={productItems[1]}/>
          <SliderItems item={productItems[2]}/>
          <SliderItems item={productItems[3]}/>
        </div>
      </div>
    </div>
  )
}

export default Home