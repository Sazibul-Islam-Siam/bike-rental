import React from 'react';

function PaymentPage({ bike, duration, onPaymentSuccess }) {
  const totalAmount = bike.price * duration;

  const handlePayment = () => {
    // Simulate successful payment (you can integrate Stripe here)
    alert(`Payment of $${totalAmount} successful for ${bike.name}`);
    onPaymentSuccess(); // Notify parent component that payment was successful
  };

  return (
    <div className="payment-page">
      <h3>Confirm Payment</h3>
      <p>You are about to rent a {bike.name} for {duration} hour(s). Total: ${totalAmount}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default PaymentPage;
