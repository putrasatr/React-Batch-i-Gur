import filter from "lodash.filter"

export const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    let filteredData = false;
    if (detail) {
        filteredData = filter(detail, item => {
            return contains(item, formattedQuery);
        });
        setData(filteredData);
        setQuery(text);
    }
}
const contains = ({ namamapel }, query) => {
    if (namamapel.toLowerCase().includes(query)) return true;
    return false;
};