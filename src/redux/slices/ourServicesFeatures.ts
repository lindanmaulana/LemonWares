import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stateRoute {
  type: string;
  route: string;
}

interface payloadOurServices {
  type: string;
  route: string;
}

const initialState: stateRoute = {
  type: "monthly",
  route: "basic",
};

const ourServicesFeatures = createSlice({
  name: "Our Services",
  initialState,
  reducers: {
    handleRouteOurServices: (
      state,
      action: PayloadAction<payloadOurServices>
    ) => {
      state.type = action.payload.type;
      state.route = action.payload.route;
    },
  },
});

export const { handleRouteOurServices } = ourServicesFeatures.actions;
export default ourServicesFeatures.reducer;
