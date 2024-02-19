export default function ErrorBlock({ height, width }) {
  return (
    <div
      className={`bg-red-300 border border-red-600 rounded-lg text-red-600 center ${height} ${width}`}
    >
      Упс! Вышла ошибка.
    </div>
  );
}
