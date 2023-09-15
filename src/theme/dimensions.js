import { initialWindowMetrics } from "react-native-safe-area-context";
import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const WITHOUT_BAR_SCREEN_WIDTH = initialWindowMetrics.frame.width;
export const WITHOUT_BAR_SCREEN_HEIGHT = initialWindowMetrics.frame.height;
export const HEADER_HEIGHT = 52;