import { useState, useEffect } from "react";
import BerryList from "./components/BerryList";
import FirmnessSlider from "./components/FirmnessSlider";
import { Berry, fetchBerries } from "./utils/fetch";

export default function App() {
  const [berries, setBerries] = useState<Berry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFirmness, setSelectedFirmness] = useState<string>("soft");

  useEffect(() => {
    async function loadBerries() {
      try {
        const fetchedBerries = await fetchBerries();
        setBerries(fetchedBerries);
        setLoading(false);
      } catch {
        setError("Failed to fetch berries");
        setLoading(false);
      }
    }
    loadBerries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const filteredBerries = berries.filter(
    (berry) =>
      berry.firmness.name.toLowerCase() === selectedFirmness.toLowerCase()
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 flex max-w-3xl w-full">
        <FirmnessSlider
          selectedFirmness={selectedFirmness}
          setSelectedFirmness={setSelectedFirmness}
        />
        <div className="border-r border-gray-200 border-dashed mx-6"></div>
        <BerryList berries={filteredBerries} />
      </div>
    </div>
  );
}
