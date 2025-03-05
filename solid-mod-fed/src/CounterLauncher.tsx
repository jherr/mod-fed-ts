import { render } from "solid-js/web";

import Counter from "./Counter";

export default function counterLauncher(element: HTMLElement) {
  render(() => <Counter />, element);
}
