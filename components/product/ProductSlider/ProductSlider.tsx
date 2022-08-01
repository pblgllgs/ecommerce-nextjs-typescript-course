import React, { FC, Children, isValidElement, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import s from './ProductSlider.module.css';
import cn from "classnames"

interface Props {
    children: React.ReactNode;
}

const ProductSlider: FC<Props> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });
    return (
        <div className={s.root}>
            <div
                ref={sliderRef}
                className="keen-slider h-full transition-opacity"
            >
                <button
                    onClick={() => instanceRef?.current.prev()}
                    className={cn(s.leftControl, s.control)}
                />
                <button
                    onClick={() => instanceRef?.current.next()}
                    className={cn(s.rightControl, s.control)}
                />
                {Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return {
                            ...child,
                            props: {
                                ...child.props,
                                className: `${
                                    child.props.className
                                        ? `${child.props.className}`
                                        : ''
                                } keen-slider__slide`,
                            },
                        };
                    }
                    return child;
                })}
            </div>
        </div>
    );
};

export default ProductSlider;
