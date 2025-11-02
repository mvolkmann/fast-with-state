import { attr, css, FASTElement, html } from "@microsoft/fast-element";
import { myState } from "./my-state.js";

const template = html`
  <label for="{inputId}">${(e) => e.label}</label>
  <input
    id=${(e) => e.inputId}
    name=${(e) => e.name}
    type="text"
    :value=${(e) => e.getName()}
    @change=${(e, c) => e.handleChange(c.event)}
  />
`;

export class LabeledInput extends FASTElement {
  @attr inputId: string;
  @attr label: string;
  @attr name: string;

  getName() {
    return myState.current.name;
  }

  handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    myState.set({ ...myState.current, name: input.value });
  }
}

LabeledInput.define({
  name: "labeled-input",
  template,
  styles: css`
    :host {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }`,
});
