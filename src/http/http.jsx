import axios from "axios";

const getStats = async (setStats) => {
    try {
        await axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=320')
            .then((response) => {
                setStats(response.data.data.rows);
            })
    } catch (e) {
        console.log(e);
    }
};
export {getStats};
