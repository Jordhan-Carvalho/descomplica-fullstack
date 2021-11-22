import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import StudentUploadPage from "./pages/StudentUploadPage/StudentUploadPage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/students" component={StudentsPage} />
          <Route path="/student-upload" component={StudentUploadPage} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  :root {
    --gradient: linear-gradient(to right, #f7f8f8, #acbb78);
    --generalFont: 'Baloo 2', cursive;
    --titleFont: 'Press Start 2P', cursive;
  }

  body {
    font-family: var(--generalFont);
    color: white;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    background: var(--gradient);
  }
`;
