import React from "react";
import {o} from "atp-sugar";

const adaptFileEventToValue = delegate =>
    e => delegate(e.target.files[0])

export const encodeFile = file => new Promise((resolve, reject) => {
    const reader  = new FileReader();

    reader.addEventListener("load", () => resolve(
        o(/^data:(.*);base64,(.*)$/.exec(reader.result)).as(match => ({
            name: file.name,
            size: file.size,
            type: file.type,
            mime: match[1],
            data: match[2]
        })))
        , false);

    reader.readAsDataURL(file);
});

export default ({
    input: {
        value: omitValue,
        onChange,
        onBlur,
        ...inputProps,
    },
    meta: omitMeta,
    ...props,
}) =>
    <input
        className="form-control"
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...inputProps}
        {...props}
    />;
