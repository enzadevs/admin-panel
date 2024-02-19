export default function LoadingBlock({ height, width }) {
  return (
    <div
      className={`bg-calm-50 border border-light rounded-lg shadow-md center ${height} ${width}`}
    >
      <p className="animate-pulse">Загрузка...</p>
    </div>
  );
}
