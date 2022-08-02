import { ProductImage } from '@common/types/product';
import Image from 'next/image';
import React, { FC } from 'react';
import Carousel from 'react-elastic-carousel';

interface Props {
    productsImages?: ProductImage[];
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1},
    { width: 768, itemsToShow: 1},
    { width: 1200, itemsToShow: 1 },
];

const Slider: FC<Props> = ({ productsImages }) => {
    return (
        <Carousel isRTL={false} breakPoints={breakPoints}>
            {productsImages.map((img) => {
                return (
                    <Image
                        key={img.url}
                        src={img.url}
                        alt={img.alt}
                        width={1050}
                        height={1050}
                        quality="85"
                    />
                );
            })}
        </Carousel>
    );
};

export default Slider;
