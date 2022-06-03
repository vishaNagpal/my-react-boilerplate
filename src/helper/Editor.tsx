

export const Editor: React.FunctionComponent<{ value: string; }> = ({ value }) => {
    return (
        <textarea className="editor">
            {value}
        </textarea>
    );
};