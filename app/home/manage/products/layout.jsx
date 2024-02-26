export const metadata = {
  title: "Настройки продуктов",
};

export default function ProductsLayout({ children }) {
  return (
    <div className="flex flex-col gap-4">
      <h2>Настройки продуктов</h2>
      {children}
    </div>
  );
}
