import { useEffect } from "react";

const Example = () => {
    useEffect(() => {
        console.log("Component Rendered!");
    }, []);

    return (
        <>
            <h2>Example</h2>
        </>
    );
};

export default Example;

