import { Product } from '@common/types/product';
import { Layout } from '@components/common';
import { ProductView } from '@components/product';
import { getConfig } from '@framework/api/config';
import { getAllProductsPaths, getProduct } from '@framework/product';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { FC } from 'react';

interface Props {
    product: Product;
}

const ProductSlug: FC<Props> = ({ product }) => {
    return <Layout>{product && <ProductView product={product} />}</Layout>;
};

export default ProductSlug;

export const getStaticPaths: GetStaticPaths = async () => {
    const config = getConfig();
    const { products } = await getAllProductsPaths(config);
    return {
        paths: products.map((product) => ({
            params: { slug: product.slug },
        })),
        fallback: false,
    };
};

export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<{ slug: string }>) => {
    const config = getConfig();
    const { product } = await getProduct({
        config,
        variables: { slug: params?.slug },
    });
    return {
        props: {
            product,
        },
    };
};
