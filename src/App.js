import React from "react";
import Profile from "./profile/profile";
import "./App.css";

function App() {
    const handleName = (name) => {
        alert(`Hi ${name} ! :D `);
    };

    return (
        <div className="App">
            <Profile
                FullName="Steve Jobs"
                Bio="Steven Paul Jobs ( February 24, 1955 – October 5, 2011) was an American business magnate, industrial designer, investor, and media proprietor. He was the chairman, chief executive officer (CEO), and co-founder of Apple Inc.; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and the founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak "
                Profession="CEO of Apple"
                handleName={handleName}
            >
                <img width="300px" src={"/SteveJobs.jpg"} alt={"Steve Jobs"} />
            </Profile>
        </div>
    );
}

export default App;
