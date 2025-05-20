import { useState } from "react";
import customerData from "../assets/customers.json";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function Customer() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedLoyalty: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const _searchTerm = filters.searchTerm.toLowerCase();
  const loyaltyOptions = [...new Set(customerData.map((c) => c.loyalty))];

  const filteredCustomers = customerData.filter((c) => {
    const nameMatch = c.customerName?.toLowerCase().includes(_searchTerm);
    const emailMatch = c.email?.toLowerCase().includes(_searchTerm);
    const loyaltyMatch = filters.selectedLoyalty
      ? c.loyalty === filters.selectedLoyalty
      : true;

    return (nameMatch || emailMatch) && loyaltyMatch;
  });

  return (
    <div className="p-8">
      <PageHeader title="Order List" breadcrumb={["Dashboard", "Order List"]}>
        <Link
          to="/FormCustomer"
          className="inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          Add
        </Link>
        <button className="bg-green-600 text-white px-3 py-1 rounded">
          Export
        </button>
        <button className="bg-gray-600 text-white px-3 py-1 rounded">
          Back
        </button>
      </PageHeader>
      <h2 className="text-xl font-bold mb-4">Customer Table</h2>

      <input
        type="text"
        name="searchTerm"
        placeholder="Search by name or email"
        value={filters.searchTerm}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <select
        name="selectedLoyalty"
        value={filters.selectedLoyalty}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Loyalty Levels</option>
        {loyaltyOptions.map((loyalty) => (
          <option key={loyalty} value={loyalty}>
            {loyalty}
          </option>
        ))}
      </select>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Customer ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((c) => (
              <tr key={c.customerId} className="hover:bg-gray-50">
                <td className="p-2 border">{c.customerId}</td>
                <td className="p-2 border">{c.customerName}</td>
                <td className="p-2 border">{c.email}</td>
                <td className="p-2 border">{c.phone}</td>
                <td className="p-2 border">{c.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredCustomers.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No matching customers found.
          </p>
        )}
      </div>
    </div>
  );
}
