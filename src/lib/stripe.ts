import Stripe from 'stripe'
import stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-03-31.basil", 
    typescript: true, 

})