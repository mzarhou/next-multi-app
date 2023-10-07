export default function LayoutChat({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-grow items-center justify-center bg-lime-700">
        {children}
      </div>
    </>
  );
}
