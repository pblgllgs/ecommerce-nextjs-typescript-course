

import { useUpdateItem } from '@common/cart'
import { CheckoutAttributesUpdatePayload } from '@framework/schema';
import { MutationHook } from '@common/types/hooks';
import { checkoutToCart, getCheckoutId } from '@framework/utils';
import { Cart } from '@common/types/cart';
import useCart from './use-cart';
import { checkoutLineItemsUpdateMutation } from '@framework/utils/mutations';
import { UseUpdateItem } from '@common/cart/use-update-item';

export default useUpdateItem as UseUpdateItem<typeof handler>;

export type UpdateItemDescriptor = {
    fetcherInput: {
        id: string,
        variantId: string,
        quantity: number
    },
    fetcherOutput: {
        checkoutLineItemsUpdate: CheckoutAttributesUpdatePayload
    },
    data: Cart
}

export const handler: MutationHook<UpdateItemDescriptor> = {
    fetcherOptions: {
        query: checkoutLineItemsUpdateMutation
    },
    async fetcher({
        input: item, options, fetch
    }) {
        const { data } = await fetch({
            ...options,
            variables: {
                checkoutId: getCheckoutId(),
                lineItems: [
                    {
                        id: item.id,
                        variantId: item.variantId,
                        quantity: item.quantity ?? 1
                    }
                ]
            }

        })

        const cart = checkoutToCart(data.checkoutLineItemsUpdate.checkout)
        return cart
    },
    useHook: ({ fetch }) => () => {
        const { mutate: updateCart } = useCart()
        return async (input) => {
            const data = await fetch(input)
            await updateCart(data, false)
            return data
        }
    }

}