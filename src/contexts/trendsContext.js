import React from "react";

export const TrendsContext = React.createContext();

export const TrendsProvider = ({ children }) => {
    const [trends, setTrends] = React.useState([]);

    const fetchTrends = async (woeid) => {
        await fetch(`http://127.0.0.1:5000/api/trends?query=${woeid}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTrends(data);
            });
    }

    React.useEffect(() => {
        fetchTrends(2487956); // Default woeid is 2487956 (San Francisco)
    }, []);

    return (
        <TrendsContext.Provider value={{ ...trends, fetchTrends }}>
            {children}
        </TrendsContext.Provider>
    );
}

export const useTrends = () => React.useContext(TrendsContext);