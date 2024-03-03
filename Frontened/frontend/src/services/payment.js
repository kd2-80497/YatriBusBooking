
  export async function initiatePayment(source, destination, paymentDate, totalPayment) {
    try {
      const url = createUrl('payments/initiate'); // Adjust the URL endpoint according to your server route
      const body = {
        source,
        destination,
        paymentDate,
        totalPayment
      };
      const response = await axios.post(url, body);
      return response.data;
    } catch (ex) {
      return createError(ex);
    }
  }

