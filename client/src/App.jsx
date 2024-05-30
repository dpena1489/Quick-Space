import Header from './components/layout/Header.jsx';
import {Outlet} from 'react-router-dom';
import Footer from "./components/layout/Footer.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });
  
function App() {
    return (
        <ApolloProvider client={client}>
        <div>
            <Header/>
            <div>
            <Outlet/>
            </div>
            <Footer/>
        </div>
        </ApolloProvider>
    );

}

export default App;
