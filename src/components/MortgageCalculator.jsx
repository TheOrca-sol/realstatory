import { useState, useMemo } from 'react';

const MortgageCalculator = ({ propertyPrice = 0 }) => {
  const [loanAmount, setLoanAmount] = useState(propertyPrice * 0.8);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const monthlyPayment = useMemo(() => {
    if (loanAmount <= 0) return 0;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return payment.toFixed(2);
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-serif font-bold mb-6 text-center">Mortgage Calculator</h2>
      <div className="space-y-6">
        {/* Loan Amount */}
        <div>
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (€)</label>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
          <input
            type="number"
            id="interestRate"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Loan Term */}
        <div>
          <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-1">Loan Term (Years)</label>
          <input
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-text-light">Estimated Monthly Payment:</p>
        <p className="text-4xl font-bold text-primary mt-2">€{monthlyPayment}</p>
      </div>
    </div>
  );
};

export default MortgageCalculator; 