import React from 'react';

type IPersonalProps = {
    onChange: (backStory: string) => void;
    updateStep: (step: number) => void;
}

const Personal: React.FC<IPersonalProps> = (props) => {
    const { onChange, updateStep } = props;
    
    return (
        <div className="form-wrapper">
            <h1>Describe your earliest childhood memory.</h1>
            <input type="text" onChange={e => onChange(e.target.value)}/>
            <div className="control-buttons">
                <button onClick={() => updateStep(-1)}>Previous</button>
                <button onClick={() => updateStep(1)}>Submit</button>
            </div>
            <div className="hourglass"></div>
        </div>
    )
}


export default Personal;