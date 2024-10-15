import React from "react";

interface FirmnessSliderProps {
  selectedFirmness: string;
  setSelectedFirmness: (firmness: string) => void;
}

const firmnessLevels = () => [
  {
    text: "Super Hard",
    value: "super-hard",
    number: 39,
    color: "text-red-500",
    position: "0%",
    shadowColor: "rgba(255, 0, 0, 0.5)",
  },
  {
    text: "Very Hard",
    value: "very-hard",
    number: 0,
    color: "text-red-400",
    position: "20%",
    shadowColor: "rgba(255, 0, 0, 0.4)",
  },
  {
    text: "Hard",
    value: "hard",
    number: 1,
    color: "text-orange-400",
    position: "45%",
    shadowColor: "rgba(255, 165, 0, 0.4)",
  },
  {
    text: "Soft",
    value: "soft",
    number: 26,
    color: "text-green-500",
    position: "70%",
    shadowColor: "rgba(0, 255, 0, 0.5)",
  },
  {
    text: "Very Soft",
    value: "very-soft",
    number: 12,
    color: "text-green-400",
    position: "90%",
    shadowColor: "rgba(0, 255, 0, 0.4)",
  },
];

const FirmnessSlider = ({
  selectedFirmness,
  setSelectedFirmness,
}: FirmnessSliderProps) => {
  const selectedFirmnessObj = firmnessLevels().find(
    (firmness) => firmness.value === selectedFirmness
  );

  console.log("selectedFirmnessObj", selectedFirmnessObj);

  return (
    <div className="flex flex-col pr-8 self-start relative">
      <div className="flex flex-col mb-6">
        <h4 className="font-bold text-md mb-1">Pok'e Berries</h4>
        <h4 className="text-xs text-gray-600/50">How tough are you?</h4>
      </div>
      <div className="relative w-14 h-70 flex flex-col items-center">
        <div className="absolute top-0 left-0 w-[30px] h-full bg-gray-200 rounded-full">
          <div
            className="absolute w-[30px] h-[30px] bg-white rounded-[20px]"
            style={{
              top: selectedFirmnessObj?.position,
              boxShadow: `0px 0px 20px 10px ${selectedFirmnessObj?.shadowColor}`,
            }}
          ></div>
        </div>
        <div className="flex flex-col items-start space-y-4 pl-12 text-gray-800 self-start whitespace-nowrap">
          {firmnessLevels().map((item, index) => (
            <div
              key={index}
              className="flex flex-col font-regular cursor-pointer"
              onClick={() => setSelectedFirmness(item.value)}
            >
              <span
                className={`text-small ${
                  item.value === selectedFirmness ? item.color : "text-black"
                } font-regular`}
              >
                {item.text}
              </span>
              <span className="text-xs text-gray-500/70">{item.number}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirmnessSlider;
