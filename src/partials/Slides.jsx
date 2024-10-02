import React, { useState, useEffect } from "react";
// import '../Carousel.css'; // For styling

const I = (x) => parseInt(x,10);

const Carousel = ({data}) => {
    // Initialize the slide state with the first object in data
    const [slide, setSlide] = useState(data[0]);
  
    // Auto-slide effect using useEffect
    useEffect(() => {
      const slideInterval = setInterval(() => {
        nextSlide();
      }, 3000);
  
      // Clear interval on component unmount
      return () => clearInterval(slideInterval);
    }, [slide]);  // Re-run effect when `slide` changes
  
    // Function to go to the next slide
    const nextSlide = () => {
      const currentIndex = data.indexOf(slide);
      const nextIndex = (currentIndex + 1) % data.length;
      setSlide(data[nextIndex]);
    };
  
    // Function to go to the previous slide
    const prevSlide = () => {
      const currentIndex = data.indexOf(slide);
      const prevIndex = (currentIndex - 1 + data.length) % data.length;
      setSlide(data[prevIndex]);
    };
  
    return (
      <small><div className="carousel">
            <ins>{slide.variations} </ins> variations possible by changing
            {/* range = {parseInt(slide.variations,10)} / {data[data.length-1].variations} = {I(slide.variations)*100/I(data[data.length-1].variations)} */}
            {/* <input type="range" value={100*I(slide.variations)/I(data[data.length-1].variations)}/> */}
        <table>
            <thead>
                <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col"><small>Prompt Strategy</small></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"><mark>{slide.words}</mark> words</th>
                <td>{slide.strategy}</td>
                </tr>
            </tbody>
        </table>
        {/* <div className="grid">
            <div>&nbsp;</div>
            <div><a href="#" className="secondary" onClick={nextSlide}>&gt;</a></div>
        </div> */}
      </div></small>
    );
};
  

export default Carousel;
