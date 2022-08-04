import Cookies from 'js-cookie';
import { SHOPIFY_CHECKOUT_ID_COOKIE_KEY } from '../const';

const getcheckoutIt = () =>Cookies.get(SHOPIFY_CHECKOUT_ID_COOKIE_KEY);

export default getcheckoutIt;