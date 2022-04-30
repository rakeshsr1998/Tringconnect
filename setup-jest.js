import "react-native-gesture-handler/jestSetup";

jest.mock("react-native-modal", () => 'Modal');
jest.mock("react-native-snap-carousel", () => 'Carousel');