
import React from "react";

export default ({markdown}) => {
    return <div
        dangerouslySetInnerHTML={{
            __html: marked(markdown || "")
        }}
    />;
}