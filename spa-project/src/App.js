import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  

function App() {  
  return (  
    <Router>  
      <Switch>  
        <Route path="/" exact component={HomePage} />  
        <Route path="/about" component={AboutPage} />  
        {/* Добавьте другие маршруты */}  
      </Switch>  
    </Router>  
  );  
}  

export default App;