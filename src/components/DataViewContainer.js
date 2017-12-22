import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider'

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
    }


    render() {
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId} minCount={this.state.minCount}/>
                <div className="filters">
                    <CountSlider />
                </div>
            </div>

        );
    }
}