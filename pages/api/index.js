// pages/index.js

import { useState } from 'react';
import Router from 'next/router';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pizza, setPizza] = useState('');
  const [address, setAddress] = useState('');
  const [token, setToken] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email: 'test@example.com' }),
    });

    const data = await res.json();
    setToken(data.token);
    alert('Registration successful!');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setToken(data.token);
    alert('Login successful!');
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/payment/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pizza, amount: 25.0, token }),
    });

    const data = await res.json();
    const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div>
      <h1>Pizza Delivery</h1>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>

      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>

      <form onSubmit={handleOrder}>
        <input type="text" placeholder="Pizza Type" onChange={(e) => setPizza(e.target.value)} />
        <input type="text" placeholder="Delivery Address" onChange={(e) => setAddress(e.target.value)} />
        <button type="submit">Order Pizza</button>
      </form>
    </div>
  );
}
