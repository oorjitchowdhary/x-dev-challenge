import React from "react";
import woeids from "../utils/woeid";

export const TrendsContext = React.createContext();

export const TrendsProvider = ({ children }) => {
    const [trends, setTrends] = React.useState([{ trend_name: "Loading...", tweet_count: 0 }]);
    const [sentiments, setSentiments] = React.useState([{ quality: "Loading...", summary: "Loading..." }]);
    const [city, setCity] = React.useState('San Francisco, California');
    const [trend, setTrend] = React.useState('Lakers');

    const fetchTrends = async (city) => {
        setCity(city);
        await fetch(`http://127.0.0.1:5000/api/trends?query=${woeids[city]}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTrends(data);
            });
    }

    const fetchSentiments = async (trend) => {
        setTrend(trend);
        console.log("Getting sentiments for", trend);
        await fetch(`http://127.0.0.1:5000/api/sentiments?query=${trend}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSentiments(data);
            });
    }

    React.useEffect(() => {
        fetchTrends('San Francisco, California'); // Default woeid is 2487956 (San Francisco)
        fetchSentiments('Lakers'); // Default trend is Lakers
    }, []);

    return (
        <TrendsContext.Provider value={{ ...trends, trend, city, fetchTrends, ...sentiments, fetchSentiments }}>
            {children}
        </TrendsContext.Provider>
    );
}

export const useTrends = () => React.useContext(TrendsContext);