export default function LoadingBlock({ height, width }) {
  return (
    <div
      className={`bg-calm-50 animate-pulse rounded-lg center ${height} ${width}`}
    >
      Загрузка...
    </div>
  );
}
