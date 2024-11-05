(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  interface HtmlElementProps {
    id: string;
    type: HtmlType;
  }

  class HtmlElement {
    public id: string;
    public type: HtmlType;

    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  interface AttributesProps {
    value: string
    placeholder: string;
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;

    constructor({ value, placeholder }: AttributesProps) {
      this.placeholder = placeholder;
      this.value = value;
    }
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  interface ElementProps {
    id: string;
    type: HtmlType;
    value: string;
    placeholder: string;
  }

  //? Idea para la nueva clase InputElement
  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;

    constructor({id, type, value, placeholder}: ElementProps) {
      this.htmlElement = new HtmlElement({id, type});
      this.inputAttributes = new InputAttributes({value, placeholder});
      this.inputEvents = new InputEvents();
    }
  }

  const nameField = new InputElement({id:"1", type:"input", value:"Kelvin", placeholder:"txtName"});

  console.log({ nameField });
})();
