import { Switch, Route } from 'react-router-dom';
import { Navbar } from './shared/Navbar';
import { BookList } from './pages/BookList';
import { AddBook } from './pages/AddBook';
import { UpdateBook } from './pages/UpdateBook';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/create-book">
          <AddBook />
        </Route>
        <Route path="/update-book/:id">
          <UpdateBook />
        </Route>
        <Route path="/">
          <BookList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
