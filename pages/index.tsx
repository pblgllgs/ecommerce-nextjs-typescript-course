import { GetStaticProps } from 'next';
import getAllProducts from '@framework/product/get-all-products';
import type { InferGetStaticPropsType } from 'next';
import { getConfig } from '../framework/shopify/api/config';

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            {JSON.stringify(products)}
        </div>
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

export default Home;
