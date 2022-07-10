import React from 'react';
import './style.scss';

type IDistanceProps = {
    onChange: (hunger: number) => void;
    updateStep: (step: number) => void;
}

const Distance: React.FC<IDistanceProps> = (props) => {
    const { onChange, updateStep } = props;
    return (
        <div className="form-wrapper">
            <h1>How far are you willing to travel?</h1>
            <input type="number" min="0" max="999999" onChange={e => onChange(e.target.valueAsNumber)}></input>
            <div className="control-buttons">
                <button onClick={() => updateStep(1)}>Next</button>
            </div>
        </div>
    )
}

export default Distance;