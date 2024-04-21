import React from "react";

export const TrendsContext = React.createContext();

const val = "Trends";

export const TrendsProvider = ({ children }) => {
    const [trends, setTrends] = React.useState([]);
    const [city, setCity] = React.useState("San Francisco, California"); // Default city is "San Francisco"

    const fetchTrends = async (woeid) => {
        await fetch(`http://127.0.0.1:5000/api/trends?query=${woeid}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTrends(data);
            });
    }

    return (
        <TrendsContext.Provider value={{ val, city, ...trends, fetchTrends }}>
            {children}
        </TrendsContext.Provider>
    );
}

export const useTrends = () => React.useContext(TrendsContext);