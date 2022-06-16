import Navbar from "./components/Navbar";
import Card  from "./components/Card";
import data from "./data/data.json";

function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id} 
                {...item}
            />
        )
    })

    return (
        <div className="App">
            <Navbar />
            <div className="container">
                {cards}
            </div>
        </div>
    );
}

export default App;