import { useState } from "react";
import ordersdata from "../assets/orders.json";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";


export default function Order() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const _searchTerm = filters.searchTerm.toLowerCase();
  const statusOptions = [...new Set(ordersdata.map((o) => o.status))];

  const filteredOrders = ordersdata.filter((o) => {
    const nameMatch = o.customerName?.toLowerCase().includes(_searchTerm);
    const statusMatch = filters.selectedStatus
      ? o.status === filters.selectedStatus
      : true;

    return nameMatch && statusMatch;
  });

  return (
    <div className="p-8">
      <PageHeader title="Order List" breadcrumb={["Dashboard", "Order List"]}>
        <Link
          to="/FormOrder"
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
      <h2 className="text-xl font-bold mb-4">Order Table</h2>

      <input
        type="text"
        name="searchTerm"
        placeholder="Search by customer name"
        value={filters.searchTerm}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <select
        name="selectedStatus"
        value={filters.selectedStatus}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Order Status</option>
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Order ID</th>
              <th className="p-2 border">Customer Name</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Total Price</th>
              <th className="p-2 border">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((o) => (
              <tr key={o.orderId} className="hover:bg-gray-50">
                <td className="p-2 border">{o.orderId}</td>
                <td className="p-2 border">{o.customerName}</td>
                <td className="p-2 border">{o.status}</td>
                <td className="p-2 border">{o.totalPrice}</td>
                <td className="p-2 border">{o.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredOrders.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No matching orders found.
          </p>
        )}
      </div>
    </div>
  );
}
