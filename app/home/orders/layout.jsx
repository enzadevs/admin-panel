export const metadata = {
  title: "Заказы",
};

export default function ManageLayout({ children }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Заказы</h2>
      {children}
    </div>
  );
}
