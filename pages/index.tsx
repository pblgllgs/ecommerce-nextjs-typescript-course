// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next';
import { FC } from 'react';
import getAllProducts from '../framework/shopify/product/get-all-products';
import { Todo } from '../interfaces/todo';

export const getStaticProps: GetStaticProps = async (ctx) => {
    const products = await getAllProducts();

    return {
        props: {
            products,
        },
        revalidate: 4 * 60 * 60,
    };
};

interface Props {
    products: Todo[];
}

const Home: FC<Props> = ({ products }) => {
    return (
        <div>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        {item.title} {item.userId}  
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
