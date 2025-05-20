// FormOrder.jsx
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
export default function FormOrder() {
  return (
    <div className="p-8">
      <PageHeader title="Order List" breadcrumb={["Dashboard", "Order List"]}>
        
        <button className="bg-green-600 text-white px-3 py-1 rounded">
          Export
        </button>
        <button className="bg-gray-600 text-white px-3 py-1 rounded">
          Back
        </button>
      </PageHeader>
      <h2 className="text-xl font-bold mb-4">Add New Order</h2>

      <form action="#" method="POST" className="space-y-4">
        <div>
          <label
            htmlFor="orderId"
            className="block text-sm font-medium text-gray-700"
          >
            Order ID
          </label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label
            htmlFor="customerName"
            className="block text-sm font-medium text-gray-700"
          >
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="totalPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Total Price
          </label>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label
            htmlFor="orderDate"
            className="block text-sm font-medium text-gray-700"
          >
            Order Date
          </label>
          <input
            type="date"
            id="orderDate"
            name="orderDate"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <Link
          type="submit"
          to="/Order"
          className="w-full bg-green-500 text-white p-2 rounded-lg font-semibold hover:bg-green-700"
        >
          Submit
        </Link>
      </form>
    </div>
  );
}
