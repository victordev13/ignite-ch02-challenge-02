import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';


export interface FoodProps{
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
}

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
