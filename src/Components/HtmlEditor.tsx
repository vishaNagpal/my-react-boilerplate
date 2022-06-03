import React, { useState } from "react";
import styled from 'styled-components';
import { Editor } from "../helper/Editor";
import { Button } from "../helper/StyledComponents";

const HtmlEditor: React.FunctionComponent = () => {
    const initVal = `<html>

</html>`;
    const [value, updateValue] = useState(initVal);
    const [isValid, updateIsValid] = useState(true);

    const checkForValidHTML = () => {
        updateIsValid(!isValid);
    };

    return <Section>
        <Editor value={value} />
        <div>
            <Button onClick={checkForValidHTML}>Validate</Button>
            <p>Content is : {isValid ? 'is Valid' : 'is not valid'}</p>
        </div>
    </Section>;
};

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
`;
export default HtmlEditor;