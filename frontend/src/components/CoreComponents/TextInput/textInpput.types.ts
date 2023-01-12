export interface ITextInputProps {
  name: string;
  placeholder: string;
  type: "email" | "string" | "password" | "textarea" | "number";
  error?: string;
  label?: string;
  as?: "input" | "textarea";
}