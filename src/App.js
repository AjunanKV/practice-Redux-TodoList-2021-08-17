import './App.css';
import TodoList from './component/TodoList';
import {Route, Link,Switch,BrowserRouter} from "react-router-dom";
import DoneList from './component/DoneList';

function App() {
  return (
    
   
    <section className = "container">
    <div>
      <BrowserRouter>
        <ul className ="BrowserRoute">
          <li>
            <Link to="/">go to the todo list page</Link>
          </li>
          <li>
          <Link to="/done">go to the todoGroup page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={TodoList}></Route>
          <Route exact path="/done" component={DoneList}></Route>
        </Switch>
      </BrowserRouter>
    </div>
    </section>
  );
}

export default App;
