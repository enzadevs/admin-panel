export const metadata = {
  title: "Заказы",
};

export default function OrdersLayout({ children }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Заказы</h2>
      {children}
    </div>
  );
}
