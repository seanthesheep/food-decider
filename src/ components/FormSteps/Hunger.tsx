import React from 'react';
import './style.scss';

type IHungerProps = {
    onChange: (hunger: number) => void;
    updateStep: (step: number) => void;
}

const Hunger: React.FC<IHungerProps> = (props) => {
    const { updateStep, onChange } = props;

    return (
        <div className="form-wrapper">
            <h1>How hungry are you right now?</h1>
            <input 
                type="range" 
                min="1" 
                max="100"
                className="slider" 
                id="hunger"
                onChange={e => onChange(e.target.valueAsNumber)} 
            />
            <div className="control-buttons">
                <button onClick={() => updateStep(-1)}>Previous</button>
                <button onClick={() => updateStep(1)}>Next</button>
            </div>
        </div>
    )
}

export default Hunger;