import { createContext, useState, useEffect } from 'react';

export const RouterContext = createContext({});

/**
 * @param {object} props
 * @param {object} props.children
 * @return {JSX.Element}
 * @constructor
 */
export default function RouterProvider(props) {
    const [state, setState] = useState({
        pathname: window.location.pathname,
        navigate: navigate,
    })

    useEffect(() => {
        window.addEventListener('popstate', () => {
            setState(s => ({...s, pathname: window.location.pathname}))
        })
    },  [])

    /**
     * @param {string} pathname
     */
    function navigate(pathname) {
        setState((s) => ({...s, pathname}));
        window.history.pushState(null, null, pathname);
    }

    return (
        <RouterContext.Provider value={state}>
            {props.children}
        </RouterContext.Provider>
    )
}

