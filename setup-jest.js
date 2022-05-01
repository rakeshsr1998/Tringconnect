import "react-native-gesture-handler/jestSetup";

global.fetch = require('jest-fetch-mock');
jest.mock("react-native-video", () => 'Video');
jest.mock("react-native-modal", () => 'Modal');
jest.mock("react-native-snap-carousel", () => 'Carousel');