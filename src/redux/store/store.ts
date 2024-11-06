import { configureStore } from "@reduxjs/toolkit";
import heroBannerFeatures from "../slices/heroBannerFeatures";
import ourServicesFeatures from "../slices/ourServicesFeatures";
const store = configureStore({
  reducer: {
    hero: heroBannerFeatures,
    ourServices: ourServicesFeatures,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
