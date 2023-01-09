import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

import CheckoutForm from './CheckoutForm'

// Make sure to call `loadStripe` outside of a component’s render
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE)

const Payment = () => {
  return (
    <section className='m-5'>
      <h2 className='text-center'>Comprar</h2>
      <div className=''>
        <Elements stripe={stripePromise}>
          <div className='container p-4'>
            <div className='row'>
              <div className='mx-auto col-6'>
                <CheckoutForm />
              </div>
            </div>
          </div>
        </Elements>
      </div>
    </section>
  )
}

export default Payment