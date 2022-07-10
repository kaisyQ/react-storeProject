import React from "react"


const Error = (props: { errorTitle?: string } ) => {
    return <div>
        <h2>Here is some problem</h2>
        <h3>{props.errorTitle}</h3>
    </div>
}
export default Error