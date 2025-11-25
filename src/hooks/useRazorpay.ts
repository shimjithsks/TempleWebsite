/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCart } from '../context/CartContext';

// This is a custom hook to encapsulate the Razorpay payment logic.
const useRazorpay = () => {
  const { getCartTotal, clearCart } = useCart();

  const displayRazorpay = (billing?: { name?: string; email?: string; contact?: string; address?: string }) => {
    const totalAmount = getCartTotal();

    const options = {
      key: 'rzp_test_xxxxxxxxxxxxxxxx', // Replace with your actual Razorpay Key ID
      amount: (totalAmount * 100).toString(), // Amount in paise
      currency: 'INR',
      name: 'Muchukunnu Temple',
      description: 'Pooja & Vazhipad Offerings',
      image: '/assets/header_god_image.png',
      handler: function (response: any) {
        alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
        // Here you would typically save the payment details to your backend
        clearCart();
      },
      prefill: {
        name: billing?.name || 'Devotee Name',
        email: billing?.email || 'devotee@example.com',
        contact: billing?.contact || '9999999999',
      },
      notes: {
        address: billing?.address || 'Temple Address, Muchukunnu, Kerala',
      },
      theme: {
        color: '#E63946',
      },
      modal: {
        ondismiss: function () {
          // user closed the modal without completing payment
          // keep cart intact and notify user
          try {
            alert('Payment cancelled. You can retry or modify your order.');
          } catch (e) {
            /* ignore */
          }
        }
      }
    };

    try {
      const paymentObject = new (window as any).Razorpay(options);

      // attach failure handler if available
      try {
        paymentObject.on && paymentObject.on('payment.failed', function (response: any) {
          console.error('Razorpay payment failed', response);
          alert('Oops! Something went wrong.\nPayment Failed');
        });
      } catch (e) {
        console.error('Error attaching payment.failed handler', e);
      }

      paymentObject.open();
    } catch (err) {
      console.error('Error opening Razorpay', err);
      alert('Unable to open payment gateway. Please try again later.');
    }
  };

  return displayRazorpay;
};

export default useRazorpay;
