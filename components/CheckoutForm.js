import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import { useState } from 'react'

const CheckoutForm = () => {
  //hook de stripe, devuelve la conexion de stripe
  const stripe = useStripe()
  //hook que accede a los elementos de la tarjeta stripe
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    //crea un nuevo método de pago
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if(error){
      console.log('ERROR',error.message)
    }

    console.log('METODO DE PAGO:', paymentMethod)
  }

  return (
    <form onSubmit={handleSubmit} className='card card-body'>
      <div className='form-group'>
        <CardElement className='form-control' />
      </div>
      <button className='mt-2 btn btn-success'>Buy</button>
    </form>
  )
}

export default CheckoutForm