import React, { useState } from "react";
import { Berry } from "../utils/fetch";

interface BerryListProps {
  berries: Berry[];
}

const ICON_BERRY =
  "https://logowik.com/content/uploads/images/rasberry-pi8488.jpg";

const BerryList: React.FC<BerryListProps> = ({ berries }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBerries = berries.filter((berry) =>
    berry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col flex-1">
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search by name..."
          className="flex items-end border border-gray-300 p-2 rounded-3xl text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="space-y-4">
        {filteredBerries.map((berry: Berry, index) => (
          <BerryCard key={index} berry={berry} />
        ))}
      </div>
    </div>
  );
};

const BerryCard = ({ berry }: { berry: Berry }) => (
  <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg">
    <div className="flex items-center flex-1 gap-2">
      <img
        alt={`${berry.name} Berry`}
        src={ICON_BERRY}
        className="w-19 h-10 border rounded-r-[50px]"
      />
      <h4 className="font-regular text-sm">{berry.name}</h4>
    </div>
    <div className="flex space-x-2 p-5">
      {berry.flavors
        .filter((flavor) => flavor.potency > 0)
        .map((flavor, i) => (
          <span
            key={i}
            className="px-4 py-1 bg-gray-100 text-gray-600/50 rounded-full text-xs border-[1px] border-2"
          >
            {flavor.flavor.name}
          </span>
        ))}
    </div>
  </div>
);

export default BerryList;
