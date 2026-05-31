import Layout from "./Component/Layout";
import LogsPanel from "./Component/LogsPanel";
import ProtocolPanel from "./Component/ProtocolPanel";
import ThreatMap from "./Component/ThreatMap";


const Dashboard = () => {
  return (
    <Layout>
      {/* Center */}
        <ThreatMap />
    </Layout>
    
  );
};

export default Dashboard;