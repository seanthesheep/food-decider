import React, { useState } from 'react';
import Distance from './FormSteps/Distance';
import Hunger from './FormSteps/Hunger';
import Feeling from './FormSteps/Feeling';
import Personal from './FormSteps/Personal';
import Results from './Results';
import Bean from '../assets/beanbeanbean.png';
import Baby from '../assets/babybabybaby.jpeg';
import Crepe from '../assets/crepecrepecrepe.jpeg';

const Form: React.FC = () => {
    const [distance, setDistance] = useState<number>();
    const [feeling, setFeeling] = useState<string>();
    const [hunger, setHunger] = useState<number>();
    const [backStory, setBackStory] = useState<string>();
    const [step, setStep] = useState<number>(0);

    const randomImage = [Bean, Baby, Crepe][(Math.random() * 3) | 0]

    const updateStep = (nextStep: number) => {
        setStep(step + nextStep);
    }

    switch (step) {
        case 0:
            return (
                <Distance
                    updateStep={nextStep => updateStep(nextStep)}
                    onChange={value => setDistance(value)}
                />
            )
        case 1:
            return (
                <Hunger
                    updateStep={nextStep => updateStep(nextStep)}
                    onChange={value => setHunger(value)}
                />
            )
        case 2:
            return (
                <Feeling
                    updateStep={nextStep => updateStep(nextStep)}
                    image={randomImage}
                    onChange={value => setFeeling(value)}
                />
            )
        case 3:
            return (
                <Personal
                    updateStep={nextStep => updateStep(nextStep)}
                    onChange={value => setBackStory(value)}
                />
            )
        case 4: 
            return (
                <Results 
                    distance={distance}
                    hunger={hunger}
                    feeling={feeling}
                    backStory={backStory}
                />
            )
        default:
            return (
                <Distance
                    updateStep={nextStep => updateStep(nextStep)}
                    onChange={value => setDistance(value)}
                />
            )
    }
}

export default Form;