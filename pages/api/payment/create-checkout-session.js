// pages/api/payment/create-checkout-session.js

import stripeLib from 'stripe';
import dbConnect from '../../../utils/dbConnect';
import { authenticateToken } from '../../../utils/auth';

const stripe = stripeLib(process.env.STRIPE_SECRET_KEY);

dbConnect();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { pizza, amount, token } = req.body;
  const user = authenticateToken(token);

  if (!user) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: pizza,
            },
            unit_amount: amount * 100, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating session' });
  }
}
