import RoutesApp from "./routes"

function App() {
  console.log(import.meta.env.VITE_API_URL)
  return (
    <div id="app">
       <RoutesApp />
    </div>
  )
}

export default App
