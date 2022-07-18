import { Todo } from "../../../interfaces/todo";
import getAllProductsQuery from '../utils/queries/get-all-products';
import fetchApi from '../utils/fetch-api';


const getAllProducts = async (): Promise<Todo[]> => {
    const products = await fetchApi({ query: getAllProductsQuery });
    return products.data;
}

export default getAllProducts;