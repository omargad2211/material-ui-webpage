import BlogSection from "./components/blog";
import Header from "./components/header";
import Landing from "./components/landing";

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <BlogSection/>
      {/* Add more components for other sections */}
    </div>
  );
}

export default App;
