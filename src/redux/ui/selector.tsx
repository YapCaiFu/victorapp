import { RootState } from "redux/store";

export const uiLoadingSelector = (state: RootState) => state.ui.loading;

export const uiIsLightSelector = (state: RootState) => state.ui.isLight;

