import { loadStripe } from "@stripe/stripe-js"

export const checkout = async({lineItems}) => {
    let stripepromise = null;
    let getstripe = () => {
        if(!stripepromise){
            stripepromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY)
        }
        return stripepromise;
    }

    const stripe = await getstripe()
    await stripe.redirectToCheckout({
        mode:"payment",
        lineItems,
        successUrl: window.location.origin,
        cancelUrl: window.location.origin,
    })
}