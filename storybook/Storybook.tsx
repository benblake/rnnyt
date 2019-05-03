import { configure, getStorybookUI } from "@storybook/react-native";

import { loadStories } from "./storyLoader";

configure(() => {
  loadStories();
}, module);

export const Storybook = getStorybookUI({});
