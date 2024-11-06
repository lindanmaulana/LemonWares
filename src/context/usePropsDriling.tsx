import { useContext } from "react";
import { PropsDriling } from "./PropsDriling";

const usePropsDriling = () => {
  return useContext(PropsDriling);
};
    
export default usePropsDriling;
