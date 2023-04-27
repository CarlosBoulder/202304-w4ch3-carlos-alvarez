import Display from "../Display/Display";
import Info from "../Info/Info";
import Keyboard from "../Keyboard/Keyboard";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Info />
      <main className="phone">
        <Keyboard />
        <Display />
      </main>
    </div>
  );
};

export default App;
