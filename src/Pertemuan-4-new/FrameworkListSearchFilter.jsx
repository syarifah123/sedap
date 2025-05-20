import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
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

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="p-8">
      <input
        type="text"
        value={dataForm.searchTerm}
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      />

      <select
        value={dataForm.selectedTag}
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      {filteredFrameworks.map((item, index) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white "
        >
         
            <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-600">{item.details.developer}</p>
            <p className="text-gray-600">{item.details.releaseYear}</p>
            <a className="text-blue-300 hover:text-blue-700 underline block">
              {item.details.officialWebsite}
            </a>
          

          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
