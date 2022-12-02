import { SpotType } from "../../types/common";

const convertTime = (epochTime: any) =>
  new Date(epochTime).toLocaleDateString();

export const VisitedSpot = ({ visitedSpot }: { visitedSpot: SpotType }) => {
  return (
    <div className="Spot">
      <p>{`${visitedSpot.name}: ${convertTime(visitedSpot.dateVisited)}`}</p>
    </div>
  );
};

export default VisitedSpot;
