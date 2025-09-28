import { useParams } from "react-router-dom";
import { provinsi } from "../../assets/asset";

const Maps = () => {
  const { path } = useParams();

  const currentProvinsi = provinsi.find((p) => p.path.toLowerCase() === path.toLowerCase());

  return (
    <div className="my-10">
      <div className="flex justify-center">
        <iframe
          src={`https://id.wikipedia.org/wiki/${currentProvinsi.path}#/map/0`}
          style={{ width: "500px", height: "400px", border: "0" }}
          loading="lazy"
        />
      </div>

      <p className="p-5">{currentProvinsi.desc}</p>
    </div>
  );
};

export default Maps;
