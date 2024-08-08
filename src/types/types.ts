export interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  className: string;
}


