import React from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Homepage from "./Homepage";
import ChessSlides from "./ChessSlides";
import ChessGame from "./AllLogic";


const SlideController = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const goToNext = () => {
        setSlideIndex((prev) => Math.min(prev + 1, 2));

    };

    const goToPrev = () => {
        setSlideIndex((prev) => Math.max(prev - 1, 0));
    };
    return (
        <Carousel
            selectedItem={slideIndex}
            onChange={(index) => setSlideIndex(index)}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={false}
            useKeyboardArrows
            emulateTouch

        >
            <div>
                <Homepage onNext={goToNext} />
            </div>
            <div>
                <ChessSlides onNext={goToNext} onPrev={goToPrev} />
            </div>
            <div>
                <ChessGame onNext={goToNext} />
            </div>
        </Carousel>
    );
};

export default SlideController;