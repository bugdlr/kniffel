import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import './RuleRow.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {
  getTopScore() {
    const { scores } = this.props; 
    let scoresArr = Object.values(scores);
    let topScore = 0;
    for (let i = 0; i < 6; i++) {
      if (scoresArr[i])  topScore += scoresArr[i];
    }
    return topScore;
  }

  getBonus() {
    return (this.getTopScore() > 63 ) ? this.getTopScore() + 35 : this.getTopScore();
  }

  getBottomScore() {
    const { scores } = this.props; 
    let scoresArr = Object.values(scores);
    let bottomScore = 0;
    for (let i = 6; i <= 12; i++) {
      if (scoresArr[i])  bottomScore += scoresArr[i];
    }
    return bottomScore;
  }

  render() {
    const { scores, doScore } = this.props;
    const topScore = this.getTopScore();
    const topAndBonus = this.getBonus();
    const bottomScore = this.getBottomScore();
    const totalScore = topAndBonus + bottomScore;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Oberer</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow description={ones.description} name="Einer" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow description={twos.description} name="Zweier" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow description={threes.description} name="Dreier" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow description={fours.description} name="Vierer" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow description={fives.description} name="F&uuml;nfer" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow description={sixes.description} name="Sechser" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} />
              <RuleRow description="total" name={`Zwischensumme:`} score={topScore}></RuleRow>
              <RuleRow description="total" name={`Bonus bei 63 oder mehr:`} score="+35 Punkte"></RuleRow>
              <RuleRow description="total" name={`Summe Teil 1:`} score={topAndBonus}></RuleRow>
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Unterer</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow description={threeOfKind.description} name="Dreierpasch" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow description={fourOfKind.description} name="Viererpasch" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow description={fullHouse.description} name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow description={smallStraight.description} name="Kline Stra&szlig;e" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow description={largeStraight.description} name="Gro&szlig;e Stra&szlig;e" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow description={yahtzee.description} name="Kniffel" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow description={chance.description} name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} />
              <RuleRow description="total" name={`Summe Teil 2:`} score={bottomScore}></RuleRow>
            </tbody>
          </table>
        </section>
        <h2>ENDSUMME: {totalScore}</h2>
      </div>
    )
  }
}

export default ScoreTable;
