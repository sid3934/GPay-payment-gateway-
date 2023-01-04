import GooglePayButton from '@google-pay/button-react';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React demo for Google Pay gateway</h1>
      <hr />
      <GooglePayButton
        environment="TEST"
        buttonSizeMode='fill'
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1.00',
            currencyCode: 'INR',
            countryCode: 'US',
          },
          shippingAddressRequired: true,
          callbackIntents: ['PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success!', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
          console.log('Payment authorised success', paymentData)
          return { transactionState: 'SUCCESS' }
        }}
        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='order'
      />
    </div>
  );
}

export default App;
