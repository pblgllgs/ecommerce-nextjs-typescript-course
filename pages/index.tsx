import { GetStaticProps } from 'next';
import getAllProducts from '@framework/product/get-all-products';
import { getConfig } from '../framework/shopify/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { FC } from 'react';
import { Product } from '@common/types/product';
import { Grid, Hero, Marquee } from '@components/ui';

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
            <Hero
                headline="Cookies & cream"
                description="Sesame snaps biscuit bear claw bonbon toffee jelly bonbon halvah. Jujubes candy canes sweet chocolate sweet chocolate jelly-o gummies. Carrot cake chocolate ice cream lollipop cupcake pudding dragée marshmallow marshmallow. Pastry marshmallow gingerbread carrot cake cupcake danish gingerbread soufflé. Chocolate bar apple pie candy canes pastry soufflé cupcake liquorice. Cupcake cookie sweet roll donut cake macaroon ice cream. Cupcake shortbread halvah jelly beans pastry caramels ice cream. Candy halvah candy canes bear claw sugar plum muffin. Cotton candy jelly beans halvah jelly gummies oat cake jelly-o. Ice cream jujubes pie sugar plum cupcake wafer marzipan marzipan. Pudding gummi bears pudding cupcake tiramisu cotton candy jujubes tart chocolate. Pudding candy canes gummies pastry cheesecake dragée. Muffin cake oat cake jelly beans cheesecake caramels tart pudding lemon drops."
            />
            <Marquee>
                {products.slice(0, 3).map((product) => (
                    <ProductCard
                        variant="slim"
                        key={product.id}
                        product={product}
                    />
                ))}
            </Marquee>
            <Grid layout="B">
                {products.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
            <Marquee variant='secondary'>
                {products.slice(0, 3).map((product) => (
                    <ProductCard
                        variant="slim"
                        key={product.id}
                        product={product}
                    />
                ))}
            </Marquee>
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
