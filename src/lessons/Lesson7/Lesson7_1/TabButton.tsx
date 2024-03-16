import { ReactNode, useTransition } from "react";

const TabButton = ({
  children,
  isActive,
  onClick,
}: {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isPending, startTransition] = useTransition();

  if (isPending) {
    return <b className="pending">Loading...</b>;
  }

  if (isActive) {
    return (
      <button className="bg-orange-100 px-2 py-2 rounded-md border-2">
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
      className="border-2 px-2 py-2 rounded-md"
    >
      {children}
    </button>
  );
};

export default TabButton;
