const LogsPanel = () => {
  return (
    <div className="border border-yellow-500/20 p-2 h-64 overflow-y-auto text-xs">
      <p>[07:56:18] WARN: Bandwidth threshold near limit</p>
      <p>[07:56:22] SYS: Recalibrating defense matrix...</p>
      <p>[07:56:25] ALERT: Brute force attempt blocked</p>
      <p>[07:56:33] SYS: Stabilizing network nodes</p>
    </div>
  );
};

export default LogsPanel;