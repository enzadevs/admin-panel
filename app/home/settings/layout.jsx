export const metadata = {
  title: "Настройки",
};

export default function UsersLayout({ children }) {
  return (
    <div className="flex flex-col gap-4">
      <h2>Настройки</h2>
      {children}
    </div>
  );
}
