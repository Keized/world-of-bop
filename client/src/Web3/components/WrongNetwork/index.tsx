import React, {PropsWithChildren} from "react";

export default function WrongNetwork({supportedNetworks}: PropsWithChildren<any>)
{
    return <div>
        <h2>"You are connected to the wrong network"</h2>
        <p>{`Please change your network to one of: ${supportedNetworks.join(', ')}`}</p>
        <button onClick={() => window.location.reload()}>Reload</button>
    </div>
}
