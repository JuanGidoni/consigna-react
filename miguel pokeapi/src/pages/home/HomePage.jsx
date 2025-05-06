import { useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";

const HomePage = () => {
    const { status, error, loadItems,pokedata } = useHomePageLogic();

    useEffect(() => {
        loadItems();
    }, []);

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;
    console.log("esto es pokedata",pokedata)
    return (
        <div>
            <div>

            </div>
        </div>
    );
};

export default HomePage;
