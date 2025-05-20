import productsData from "./products.json";
import { useState } from "react";

export default function ProductList() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const allTags = [...new Set(productsData.flatMap((product) => product.tags))];

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(_searchTerm) ||
      product.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? product.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="p-4 sm:p-8 bg-white-700">
      
      <input
        type="text"
        value={dataForm.searchTerm}
        name="searchTerm"
        placeholder="Search product..."
        className="w-full p-2 border border-gray-300 rounded mb-4 sm:w-1/2"
        onChange={handleChange}
      />

     
      <select
        value={dataForm.selectedTag}
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4 sm:w-1/3"
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

  
      <div className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-md bg-blue-200 sm:p-6"
          >
            <h2 className="bg-yellow-50text-lg font-bold text-gray-800">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-600">Kategori: {item.category}</p>
            <p className="text-gray-600">Harga: ${item.price}</p>
            <p className="text-gray-600">Diskon: {item.discountPercentage}%</p>
            <p className="text-gray-600">Rating: {item.rating}</p>
            <p className="text-gray-600">Stok: {item.stock}</p>
            <p className="text-gray-600">Brand: {item.brand}</p>


            <div className="mt-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// "id": 2,
// "title": "Samsung Galaxy S21",
// "description": "A powerful smartphone with a sleek design and impressive camera features.",
// "category": "technology",
// "price": 699.99,
// "discountPercentage": 5,
// "rating": 4.7,
// "stock": 40,
// "tags": ["smartphone", "Samsung"],
// "brand": "Samsung",
// "dimensions": {"width": 71.2, "height": 151.7, "depth": 7.9}
