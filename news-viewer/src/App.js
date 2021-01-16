import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { useCallback, useState } from 'react';
import{ Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
/*
const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};
*/

const App = () => {
  return <Route path='/:category?' component={NewsPage} />;
}
export default App;