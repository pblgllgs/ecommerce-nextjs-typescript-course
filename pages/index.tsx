import { useEffect } from "react";
import play from "../playground";

export default function Home() {
    
    useEffect(() => {
      play();
    }, [])
    
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}
