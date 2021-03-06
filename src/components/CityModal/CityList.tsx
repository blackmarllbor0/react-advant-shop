import { FC } from "react";
import { useAction } from "../../hooks/useAction";
import { userTypeSelector } from "../../hooks/useTypeSelector";

type props = {
  closeModal: () => void;
};

const CityList: FC<props> = ({ closeModal }) => {
  const { cities, loading } = userTypeSelector((state) => state.city);
  const { setActiveCity } = useAction();

  const click = (town: string) => {
    setActiveCity(town);
    closeModal();
  };
  return (
    <div className="town-list">
      {loading === "loading" ? (
        <h1>Loading</h1>
      ) : (
        cities.map((town, i) => (
          <span className="link town" onClick={() => click(town)} key={i}>
            {town}
          </span>
        ))
      )}
    </div>
  );
};

export default CityList;
