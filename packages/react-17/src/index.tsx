import * as React from "react";
import { atom, useAtom } from "jotai";

const Atom = atom(false);

function App() {
  const [state, setState] = useAtom(Atom);

  return <div onClick={() => setState((it) => !it)}>{state}</div>;
}

console.log(<App />)

type JSXElement = JSX.Element;
