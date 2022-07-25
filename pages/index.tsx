import { GetStaticProps } from 'next';
import getAllProducts from '@framework/product/get-all-products';
import { getConfig } from '../framework/shopify/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { FC } from 'react';
import { Product } from '@common/types/product';
import { Grid } from '@components/ui';

interface Props {
    products: Product[];
}

const HomePage: FC<Props> = ({ products }) => {
    return (
        <Layout>
            <Grid>
                {products.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
        </Layout>
    );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
    const config = getConfig();
    const products = await getAllProducts(config);
    return {
        props: {
            products,
        },
        revalidate: 4 * 60 * 60,
    };
};

export default HomePage;
