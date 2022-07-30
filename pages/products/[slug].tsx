import { Layout } from '@components/common';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { FC } from 'react';

interface Props {
    product: {
        slug: string;
    };
}

const ProductSlug: FC<Props> = ({ product }) => {
    return (
        <Layout>
            <h1>{product.slug}</h1>
        </Layout>
    );
};

export default ProductSlug;

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { slug: 'cool-hat' } },
            { params: { slug: 't-shirt' } },
            { params: { slug: 'lightweight-jacket' } },
        ],
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    return {
        props: {
            product: {
                slug: params?.slug,
            },
        },
    };
};
