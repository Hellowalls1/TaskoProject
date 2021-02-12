import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import ProjectList from "./Project/ProjectList";
import { ProjectDetails } from "./Project/ProjectDetails";
import TaskList from "./Task/TaskList";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <ProjectList /> : <Redirect to="/login" />}
        </Route>

        <Route path={`/getProjectById/:id`}>
          {isLoggedIn ? <ProjectDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path={`/getTasksByListId/:id`}>
          {isLoggedIn ? <TaskList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
}
