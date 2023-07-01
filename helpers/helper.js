export const numberFormat = (number) => {
  return new Intl.NumberFormat().format(number);
};
const handleErrorMessage = (err) => {
  if (err.response) {
    console.log("Error Response", err.response.data);
    if (err.response.status == 422) {
      const errors = [];
      Object.keys(err.response.data.message).map((key) => {
        err.response.data.message[key].map((e) => {
          errors.push(e);
        });
      });
      return errors.join();
    }
    return err.response.data.message;
  } else if (err.request) {
    console.log("Error Request", err.request);
    return err.request;
  } else {
    return err.message;
  }

  // return 'خطای سرور، دوباره تلاش کنید'
};

export const numberFormating = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { handleErrorMessage };