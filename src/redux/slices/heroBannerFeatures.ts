import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { payloadRoute } from "./types";


interface stateRoute {
  route: string
}

const initialState: stateRoute = {
  route: "hosting",
};

const heroBannerFeatures = createSlice({
  name: "Hero Banner",
  initialState,
  reducers: {
    handleRouteHeroBanner: (state, action: PayloadAction<payloadRoute>) => {
      state.route = action.payload;
    },
  },
});

export const { handleRouteHeroBanner } = heroBannerFeatures.actions;
export default heroBannerFeatures.reducer;
