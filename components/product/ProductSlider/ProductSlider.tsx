import React, { FC } from 'react';
import s from './ProductSlider.module.css';

interface Props {
    children: React.ReactNode;
}

const ProductSlider: FC<Props> = ({ children }) => {
    return (
        <div className={s.root}>
            <div className="h-full transition-opacity">{children}</div>
        </div>
    );
};

export default ProductSlider;
