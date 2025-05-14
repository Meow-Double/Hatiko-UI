import { SearchIcon } from "./library/icons";
import { Button } from "./library/uikit";

const App = () => {
  const testAlert = () => {
    alert("test alert");
  };

  return (
    <div className="flex_block">
      <Button variant="primary">test button</Button>
      <Button variant="primary" loading>
        test button
      </Button>
      <Button variant="outline">test button</Button>
      <Button onClick={testAlert} variant="outline" startIcon={<SearchIcon />}>
        test button
      </Button>
      <Button
        onClick={testAlert}
        variant="primary"
        endIcon={<SearchIcon />}
        disabled
      >
        disabled
      </Button>
    </div>
  );
};

export default App;
