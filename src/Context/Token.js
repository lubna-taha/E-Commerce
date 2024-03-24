import { createContext, useEffect, useState } from "react";

export let tokenContext = createContext();

export default function TokenContextProvider(props) {

    const [token, setToken ]  = useState(null)

    useEffect(() => {
        if (localStorage.getItem('userToken') !== null) {
            setToken(localStorage.getItem('userToken'))
        }
    }, [])

    return <tokenContext.Provider value={{ token, setToken }}>
        {props.children}
    </tokenContext.Provider>
}