import { SpotType } from "./types/common";

export const Spot = ({ spot }: { spot: SpotType }) => {
  return (
    <div className="Spot">
      <p>{spot.name}</p>
    </div>
  );
};

export default Spot;
