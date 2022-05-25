import './App.css';

import Container from '@mui/material/Container';
import JobPage from "./components/JobPage";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <JobPage />
      </Container >
    </Provider>
  );
}

export default App;
