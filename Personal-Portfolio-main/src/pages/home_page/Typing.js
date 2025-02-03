import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return ( <
        Typewriter options = {
            {
                strings: [
                    "AI Engineer",
                    "ML Engineer",
                    "Backend Developer",
                    "AI&ML Enthusiast"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }
        }
        />
    );
}

export default Typing;