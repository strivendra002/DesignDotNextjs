import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import HotTopics from "./components/HotTopics";
import About from "./components/About";
import Insights from "./components/Insights";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <HotTopics />
      <About />
      <Insights />
    </div>
  );
}
