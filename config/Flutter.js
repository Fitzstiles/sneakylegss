import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useStateValue } from "../globalStore/ContextProvider";
import { useRouter } from "next/router";

export default function Flutter({ email, name }) {
  const [{ total }] = useStateValue();
  const [{ cart }] = useStateValue();
  const reason = cart?.map((a) => a.name);
  const router = useRouter();

  const config = {
    public_key: "FLWPUBK_TEST-a8090d406a7be1163c07a28ed249049b-X",
    tx_ref: Date.now(),
    amount: total,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      name: name,
    },
    customizations: {
      title: "My store",
      description: reason,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Make Payments",
    callback: (response) => {
      const success = response.status === "successful";
      if (success) {
        router.push("/products");
        cart.splice(0, cart.length);
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
