import { css, FASTElement, html } from "@microsoft/fast-element";
import { myState } from "./my-state.js";

const template = html`<p>Hello, ${(e) => e.getName()}!</p>`;

export class HelloWorld extends FASTElement {
  getName() {
    return myState.current.name;
  }
}

HelloWorld.define({
  name: "hello-world",
  template,
  styles: css`
    p { color: purple; }
  }`,
});
