import { Button, ButtonProps } from "@/components/ui/button";

export const ButtonLink = ({
  type = "button",
  children,
  variant,
  className,
}: ButtonProps) => {
  return (
    <Button variant={variant} className={className} type={type}>
      {children}
    </Button>
  );
};
