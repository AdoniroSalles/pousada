
import next from "next";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";

type CarouselItemProps = {
    children: ReactNode,
    width?: number
}

type CarouselProps = {
    children: ReactNode
}

export const CarouselItem = ({ children, width }: CarouselItemProps) => {
    return (
        <div className="carousel-item gap-2" style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }: CarouselProps) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [touchPosition, setTouchPosition] = useState(0)

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    const handleTouchStart = (event : React.TouchEvent<HTMLDivElement>) => {
        const touchDown = event.touches[0].pageX;
        console.log('touch down', touchDown);
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        const touchDown = touchPosition;

        if(event.touches[0].pageX < touchPosition) {
            updateIndex(activeIndex -1) ;
        }else{
            updateIndex(activeIndex + 1)
        }
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if(!paused) updateIndex(activeIndex + 1);
    //     }, 3000);

    //     return () => {
    //         if(interval){
    //             clearInterval(interval)
    //         }
    //     }
    // })

    return (
        <div className="carousel"
            onTouchStart={ handleTouchStart }
            onTouchMove = { handleTouchMove }
            onMouseEnter={ () => setPaused(true) }
            onMouseLeave={ () => setPaused(false)}
        >
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {
                    React.Children.map(children, (child, index) => {
                        return React.cloneElement(child as ReactElement, { width: "100%" });
                    })
                }
            </div>
            <div className="indicators">
                <button onClick={() => {
                    updateIndex(activeIndex - 1);
                }}>
                    Prev
                </button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${index === activeIndex ? "active" : ""}`}
                            onClick={() => { updateIndex(index); }}>
                            {index + 1}
                        </button>
                    )
                })

                }
                <button
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Carousel;