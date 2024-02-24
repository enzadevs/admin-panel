export default function ErrorBlock({ height, width }) {
  return (
    <div
      className={`bg-red-200 border border-red-500 rounded-lg text-xs md:text-sm text-red-500 center ${height} ${width}`}
    >
      Упс! Вышла ошибка.
    </div>
  );
}
