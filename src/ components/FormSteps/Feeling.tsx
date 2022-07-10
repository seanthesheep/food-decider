import React from 'react';
import defaultImg from '../../assets/default.jpeg';

type IFeelingProps = {
    image?: string;
    onChange: (feeling: string) => void;
    updateStep: (step: number) => void;
}

const Feeling: React.FC<IFeelingProps> = (props) => {
    const { image = defaultImg, onChange, updateStep } = props;
    
    return (
        <div className="form-wrapper">
            <h1>How does this image make you feel?</h1>
            <img src={image} alt="how do you feel?"/>
            <input type="text" onChange={e => onChange(e.target.value)}/>
            <div className="control-buttons">
                <button onClick={() => updateStep(-1)}>Previous</button>
                <button onClick={() => updateStep(1)}>Next</button>
            </div>
        </div>
    )
}


export default Feeling;