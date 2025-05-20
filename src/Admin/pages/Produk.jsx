import artikelData from "../data/produk_list.json";

const Produk = () => {
  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Image</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Description</th>
              <th className="px-4 py-2 border border-gray-300">Price</th>
              <th className="px-4 py-2 border border-gray-300">Stock</th>
            </tr>
          </thead>
          <tbody>
            {artikelData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 align-top">
                <td className="px-4 py-2 border border-gray-300 min-w-[150px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[150px] h-[150px] object-cover rounded shadow"
                  />
                </td>
                <td className="px-4 py-2 border border-gray-300 font-semibold text-gray-800">
                  {item.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.description}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.price}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Produk;
