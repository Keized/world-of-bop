import React, { useState } from "react";

export const HouseContext = React.createContext({rooms: {}, selectedId: null});

function HouseProvider(props) {
    const [house, setHouse] = useState({rooms: {}, selectedId: null});

    return(
        <HouseContext.Provider value={{house, setHouse}} >
            {props.children}
        </HouseContext.Provider>
    )
}

export default HouseProvider;
