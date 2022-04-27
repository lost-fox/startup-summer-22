import { KeyboardEvent } from "react";

export interface SearchProps {
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}
