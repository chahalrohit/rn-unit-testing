import React, { useCallback } from "react";
import { Alert, Button, View } from "react-native";
import RazorpayCheckout from "react-native-razorpay";

const PaymentScreen = () => {
  const handlePayment = useCallback(() => {
    const options = {
      description: "Sample Payment",
      image: "https://your-logo-url.com/logo.png",
      currency: "INR", // Change to your currency
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your test/live key
      amount: "5000", // Amount in paise (e.g., 5000 = ₹50)
      name: "Your Company Name",
      prefill: {
        email: "customer@example.com",
        contact: "9999999999",
        name: "Customer Name",
      },
      theme: { color: "#528FF0" },
      retry: { enabled: true, max_count: 2 },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        // Handle success
        Alert.alert("Success", `Payment ID: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // Handle failure
        Alert.alert("Error", error.description);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Pay ₹50" onPress={handlePayment} />
    </View>
  );
};

export default PaymentScreen;
