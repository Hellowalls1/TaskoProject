import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { TeamProvider } from "./providers/TeamProvider";
import ApplicationViews from "./components/ApplicationViews";
import { ProjectProvider } from "./providers/ProjectProvider";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <TeamProvider>
          <ProjectProvider>
            <ListProvider>
              <Header />
              <ApplicationViews />
            </ListProvider>
          </ProjectProvider>
        </TeamProvider>
      </UserProfileProvider>
    </Router>
  );
}
export default App;
