import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
  render() {
    const {score, name, doScore, description} = this.props;
    const disabled = score !== undefined;
    const total = description === "total";
    if (total) {
      return (
      <tr className={`RuleRow RuleRow-total`}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
      ) 
    } else {
    return (
      <tr className={`RuleRow RuleRow-${disabled ? "disabled": "active"}`} onClick={disabled ? null : doScore}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{disabled ? score : description}</td>
      </tr>
    )
    }

  }
}

export default RuleRow;