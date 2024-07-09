import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroRecommendation } from "./components/HeroRecommendation/HeroRecommendation,";
import { Layout } from "./components/Layout/Layout";
function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <HeroRecommendation />
      </Layout>
    </>
  );
}

export default App;
