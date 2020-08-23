import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './Pages/home'
import SubjectPage from './Pages/subjectPage'
import Files from './Pages/files'
import Slides from './Pages/slides';
import Books from './Pages/books'
import Questions from './Pages/questions'
import Lectures from './Pages/lectures'
import Sessionals from './Pages/sessionals'
import Cp from './Pages/cp'
import Classes from './Pages/classes'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/subject/:id' exact component={SubjectPage}/>
        <Route path='/books/:id' exact component={Books}/>
        <Route path='/classes/:id' exact component={Classes}/>
        <Route path='/questions/:id' exact component={Questions}/>
        <Route path='/slides/:id' exact component={Slides}/>
        <Route path='/lectures/:id' exact component={Lectures}/>
        
        <Route path='/sessionals/:id' exact component={Sessionals}/>

        <Route path='/cp/:id' exact component={Cp}/>
        <Route path='/data-structures/:id' exact component={Books}/>
        <Route path='/links/:id' exact component={Books}/>
        <Route path='/algorithms/:id' exact component={Books}/>
        <Route path='/editorials/:id' exact component={Books}/>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
