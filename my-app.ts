import { css, FASTElement, html } from "@microsoft/fast-element";
import "./hello-world.js";
import "./labeled-input.js";
import { myState } from "./my-state.js";

const template = html`
  <hello-world></hello-world>
  <labeled-input input-id="name" label="Name" name="name"></labeled-input>
  <button @click=${(x) => x.reset()}>Reset</button>
`;

export class MyApp extends FASTElement {
  reset() {
    myState.set({ name: "World" });
  }
}

MyApp.define({
  name: "my-app",
  template,
  styles: css`
    :host {
      font-family: sans-serif;
    }
    button {
      margin-top: 1rem;
    }
  }`,
});
