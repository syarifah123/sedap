import artikelData from "../data/artikel_list.json";

const Artikel = () => {
  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Image</th>
              <th className="px-4 py-2 border border-gray-300">Title</th>
              <th className="px-4 py-2 border border-gray-300">Content</th>
              <th className="px-4 py-2 border border-gray-300">Date</th>
            </tr>
          </thead>
          <tbody>
            {artikelData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 align-top">
                <td className="px-4 py-2 border border-gray-300 min-w-[150px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[150px] h-[150px] object-cover rounded shadow"
                  />
                </td>
                <td className="px-4 py-2 border border-gray-300 font-semibold text-gray-800">
                  {item.title}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.content}
                </td>
                <td className="px-4 py-2 border border-gray-300">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Artikel;
