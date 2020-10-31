import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import { ProjectProvider } from "./providers/ProjectProvider";

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <ProjectProvider>
          <ApplicationViews />
        </ProjectProvider>
      </UserProfileProvider>
    </Router>
  );
}
export default App;
