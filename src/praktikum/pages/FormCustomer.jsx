import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
export default function FormCustomer() {
  return (
    <div className="p-8">
      <PageHeader title="Order List" breadcrumb={["Dashboard", "Order List"]}>
        {/* <button className="bg-blue-600 text-white px-3 py-1 rounded">
          Add
        </button> */}
        <button className="bg-green-600 text-white px-3 py-1 rounded">
          Export
        </button>
        <button className="bg-gray-600 text-white px-3 py-1 rounded">
          Back
        </button>
      </PageHeader>
      
      <h2 className="text-xl font-bold mb-4">Add New Customer</h2>

      <form action="#" method="POST" className="space-y-4">
        <div>
          <label
            htmlFor="customerId"
            className="block text-sm font-medium text-gray-700"
          >
            Customer ID
          </label>
          <input
            type="text"
            id="customerId"
            name="customerId"
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
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label
            htmlFor="loyalty"
            className="block text-sm font-medium text-gray-700"
          >
            Loyalty
          </label>
          <select
            id="loyalty"
            name="loyalty"
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Loyalty Level</option>
            <option value="Bronze">Bronze</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
          </select>
        </div>

        <Link
          type="submit"
          to="/Customer"
          className="w-full bg-green-500 text-white p-2 rounded-lg font-semibold hover:bg-green-700"
        >
          Submit
        </Link>
      </form>
    </div>
  );
}
