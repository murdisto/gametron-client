import React from 'react';
import {connect} from 'react-redux';
import GameLeaderboardListPlayers from './gameLeaderboardListPlayers';
import './gameLeaderboard.css'

 
export class GameLeaderboard extends React.Component {
    constructor(props){
    super(props);
    this.state = {}
    }
    
    render() {
 
      return (
        <div className="subcard">
            <GameLeaderboardListPlayers 
                gameEndScore={this.props.gameEndScore}
                selectedGame ={this.props.selectedGame}
                gameParticipants={this.props.gameParticipants}/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedGame: state.game.data,
        gameParticipants: state.game.data.participants,
        gameEndScore: state.game.data.endScore
    };
};

export default connect(mapStateToProps)(GameLeaderboard);