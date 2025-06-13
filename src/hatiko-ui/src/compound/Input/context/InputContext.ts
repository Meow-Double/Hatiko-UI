import { createAccurateContext } from "@/library/utils/context/createAccurateContext";


export interface InputContextprops {
  id: string;
}

export const InputContext = createAccurateContext<InputContextprops>()