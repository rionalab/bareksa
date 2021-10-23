import Date from "comps/main/date/Date";
import SectionBottom from "comps/main/section-bottom/SectionBottom";
import SectionTop from "comps/main/section-top/SectionTop";
import Navbar from "comps/navbar/Navbar";

function App() {
  return (
      <>
          <Navbar />
          <main>
              <Date />
              <div className="content">
                <SectionTop />
                <SectionBottom />
              </div>
          </main>
      </>
  );
}

export default App;
