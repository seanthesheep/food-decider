import React from 'react';

type IResultsProps = {
    distance?: number;
    hunger?: number;
    feeling?: string;
    backStory?: string;
}

const Results: React.FC<IResultsProps> = (props) => {
    const { distance, hunger, feeling, backStory } = props;

    return (
        <div className="results-container">

        </div>
    )
}

export default Results;