export const metadata = {
  title: "Настройки заказов",
};

export default function OrdersLayout({ children }) {
  return (
    <div className="flex flex-col gap-4">
      <h2>Настройки заказов</h2>
      {children}
    </div>
  );
}
