import { Product } from '@common/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
    product?: Product;
}
const placeholderImage = "/product-image-placeholder.svg";
const ProductCard: FC<Props> = ({ product }) => {
    return (
        <Link href={`/products/${product.slug}`}>
            <a>
                <div>
                    <h3>
                        <span>{product.name}</span>
                    </h3>
                    <span>$14</span>
                </div>
                {product.images && (
                    <Image
                        src={product.images[0].url ?? placeholderImage}
                        alt={product.name ?? 'Product name'}
                        height={540}
                        width={540}
                        quality="85"
                        layout="responsive"
                        priority
                    />
                )}
            </a>
        </Link>
    );
};

export default ProductCard;
