import { useParams } from "react-router-dom";
import { provinsi } from "../../assets/Asset";
import { useAppContext } from "../../contexts/AppContext";

const Maps = () => {
  const { isDarkMode } = useAppContext();
  const { path } = useParams();

  const currentProvinsi = provinsi.find(
    (p) => p.path.toLowerCase() === path.toLowerCase()
  );

  return (
    <div className={` ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white border-gray-200'} rounded-lg border p-4 sm:p-6 max-w-5xl mx-auto`}>
      <div className="flex md:order-1 justify-center">
        <iframe
          src={`https://id.wikipedia.org/wiki/${currentProvinsi.path}#/map/0`}
          style={{ width: "500px", height: "400px", border: "0" }}
          loading="lazy"
        />
      </div>

      <p className="p-5 grid-cols-3">{currentProvinsi.desc}</p>
    </div>
  );
};

export default Maps;
