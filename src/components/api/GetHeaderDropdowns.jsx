import React from "react";
import useFetch from 'react-fetch-hook';


const GetHeaderDropdowns = (props) => {

    const [dropdownData, setDropdownData] = React.useState([]);

    const { data, loading, error } = useFetch(
        'https://run.mocky.io/v3/9e343425-c47c-4c7f-a1ac-972c099be0ed',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'GET'
        }
    );

    // error handling
    if (error) {
        console.log(error);
    }

    if (loading) {
        setDropdownData(<div>Loading...</div>);
    }

    React.useEffect(() => {
        if (data) {
            setDropdownData(data);
        }
    }, [data]);

    return data;
}


export default GetHeaderDropdowns;