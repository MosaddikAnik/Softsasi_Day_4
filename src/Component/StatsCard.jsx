import Card from "./LogsPanel";

const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Users" value="1,240" />
      <Card title="Revenue" value="$12,400" />
      <Card title="Orders" value="320" />
    </div>
  );
};

export default StatsCard;