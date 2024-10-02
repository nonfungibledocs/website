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
      <div className="carousel">
        <label>
            <ins>{slide.variations} </ins> variations possible by changing
            {/* range = {parseInt(slide.variations,10)} / {data[data.length-1].variations} = {I(slide.variations)*100/I(data[data.length-1].variations)} */}
            {/* <input type="range" value={100*I(slide.variations)/I(data[data.length-1].variations)}/> */}
        </label>
        <table>
            <thead>
                <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col"><strong>Prompt Strategy</strong></th>
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
      </div>
    );
  };
  
// const xCarousel = ({data}) => {
//     const [slide, setSlide] = useState(data[0]);
//     const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//     // Automatically go to the next slide every 3 seconds
//     useEffect(() => {
//         const slideInterval = setInterval(() => {
//         setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % data.length);
//         }, 3000);

//         // Clear interval when component unmounts
//         return () => clearInterval(slideInterval);
//     }, []);

//     useEffect(() => {
//         setSlide(data[currentSlideIndex]);
//     }, [currentSlideIndex]);


//     // Function to manually go to the next slide
//     const nextSlide = () => {
//         setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % data.length);
//     };

//     // Function to manually go to the previous slide
//     const prevSlide = () => {
//         setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
//     };

//     return (
//         <div className="carousel">
//             <label>
//                 Variations
//                 <input type="range" value={slide.variations}/>
//             </label>
//         <div className="carousel-slide">
//             <h2>{slide.perc}</h2>
//             <p><strong>Words:</strong> {slide.words}</p>
//             <p><strong>Strategy:</strong> {slide.strategy}</p>
//             <p><strong>Variations:</strong> {slide.variations}</p>
//         </div>
//         <div className="carousel-buttons">
//             <button onClick={prevSlide}>Previous</button>
//             <button onClick={nextSlide}>Next</button>
//         </div>
//         </div>
//     );
// };

export default Carousel;
