'use client'

import { useState } from 'react';
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function CreateMarket() {
  const [question, setQuestion] = useState('');
  const [endDate, setEndDate] = useState('');

  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
  const { mutateAsync: createMarket, isLoading } = useContractWrite(contract, "createMarket")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await createMarket({ args: [question, new Date(endDate).getTime()] });
      console.info("contract call success", data);
      alert('Market created successfully!');
    } catch (err) {
      console.error("contract call failure", err);
      alert('Failed to create market. Please try again.');
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Prediction Market</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block mb-2">Question</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block mb-2">End Date</label>
          <input
            type="datetime-local"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Market"}
        </button>
      </form>
    </div>
  );
}

