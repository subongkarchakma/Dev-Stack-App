import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Tech from "./components/technologies/Tech";
import type { ITech } from "./types/techType";
const techFetch = async(): Promise<ITech> =>{
  const res = await fetch('/public/technologies.json');
  const data = await res.json();
  return data
}
function App() {
 const techPromise = techFetch()
  return (
    <>
  <Nav />
  <Banner />
  <Suspense fallback={<h2>Loading.....</h2>} >
  <Tech techPromise = {techPromise} />
  </Suspense>
    </>
  )
}

export default App
