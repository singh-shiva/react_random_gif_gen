import Tag from "./components/Tag";
import Random from "./components/Random";
export default function App() {
  return(
    <div className="wrapper background">
      <h2 className="wrapper-heading">RANDOM GIFS</h2>
      <div className="box-container">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
