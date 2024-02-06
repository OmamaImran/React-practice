import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

function Alert({ children, onClick }: Props) {
  return (
    <>
      <p className="bg-red-500 text-white flex items-center justify-between px-4 py-2">
        {children}
        <div onClick={onClick} className="h-3 w-3 bg-black"></div>
      </p>
    </>
  );
}

export default Alert;
