import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Oberer</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Einer" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow name="Zweier" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow name="Dreier" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow name="Vierer" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow name="F&uuml;nfer" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow name="Sechser" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Unterer</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Dreierpasch" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow name="Viererpasch" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow name="Kline Stra&szlig;e" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow name="Gro&szlig;e Stra&szlig;e" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow name="Kniffel" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default ScoreTable;
