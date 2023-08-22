import Header from "./components/Header"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"
import Clients from "./components/Clients"
import AddClientModal from "./components/AddClientModal"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AddClientModal />
        <Clients />
      </div>
    </>
  )
}

export default App
