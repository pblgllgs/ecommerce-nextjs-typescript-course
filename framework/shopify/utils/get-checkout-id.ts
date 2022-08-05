import { SHOPIFY_CHECKOUT_URL_COOKIE } from '@framework/const';
import Cookies from 'js-cookie';

const getcheckoutIt = () => Cookies.get(SHOPIFY_CHECKOUT_URL_COOKIE);

export default getcheckoutIt;