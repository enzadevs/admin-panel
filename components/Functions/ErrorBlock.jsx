export default function ErrorBlock({ height, width }) {
  return (
    <div
      className={`bg-red-200 rounded-lg md:text-sm text-red-500 center ${height} ${width}`}
    >
      Вышла ошибка !
    </div>
  );
}
