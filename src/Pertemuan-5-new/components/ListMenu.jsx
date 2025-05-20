export default function ListMenu({ id, icon, label }) {
    return (
      <li>
        <div
          id={id}
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <span className="mr-4 text-xl">{icon}</span>
          {label}
        </div>
      </li>
    );
  }
  