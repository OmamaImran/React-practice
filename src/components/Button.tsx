import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: String;
  onClick: () => void;
}

function Button({ children, color = "green", onClick }: Props) {
  return (
    <>
      <p
        onClick={onClick}
        className={
          "bg-" + color + "-500 rounded-full text-gray-200 px-4 py-2 m-5 w-fit"
        }
      >
        {children}
      </p>
    </>
  );
}

export default Button;
