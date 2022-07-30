import { ApiConfig } from '@common/types/api';
import { Product } from '@common/types/product';
import { ProductConnection } from '@framework/schema';
import { getAllProductsPathsQuery } from '../utils';

type ReturnType = {
    products: Pick<Product, "slug">[]
}

const getAllProductsPaths = async ({ apiUrl, fetch }: ApiConfig): Promise<ReturnType> => {
    const { data } = await fetch<{ products: ProductConnection }>({ query: getAllProductsPathsQuery, url: apiUrl });
    const products = data.products.edges.map(({ node: { handle } }) => {
        return {
            slug: handle
        }
    });
    return {
        products: products
    }
}

export default getAllProductsPaths;