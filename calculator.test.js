it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 10,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual(103.63);
});

it('should remain two decimal places', function () {
  // ...
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual(131.00);
});
