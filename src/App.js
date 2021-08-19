import './App.css';
import TodoList from './component/TodoList';
import {Route, Link,Switch,BrowserRouter} from "react-router-dom";
import DoneList from './component/DoneList';
import { Breadcrumb } from 'antd';
import { HomeFilled,EditFilled,TrophyFilled } from '@ant-design/icons';
function App() {
  return (
    <section className = "container">
    <div>
      <BrowserRouter>
     
      <Breadcrumb.Item key="Home">
      <Link to="/home"> <HomeFilled/>Home</Link>
      </Breadcrumb.Item>
      
            <Breadcrumb.Item key="TodoList">
            <Link to="/"><EditFilled/>Todo list page</Link>
            </Breadcrumb.Item>
    
          <Breadcrumb.Item key="TodoGroup">
          <Link to="/done"><TrophyFilled />DoneList page</Link>
          </Breadcrumb.Item>
          
      
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
