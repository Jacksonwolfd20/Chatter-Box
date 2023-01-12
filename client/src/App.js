import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";



import Homepage from './Pages/Homepage';
import Chatroom from './Pages/chatroom';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
    <ApolloProvider client={client}>
      
        <Router>
        
          <Routes>

              <Route path="/" element={<Homepage />}  />
              <Route path="/chatroom" element={<Chatroom />} />

              </Routes>
              
        </Router>
        
    </ApolloProvider>
    </div>
  );
}

export default App;