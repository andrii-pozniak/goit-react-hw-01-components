import PropTypes from 'prop-types'

export const StatCards = ({label, percentage}) => {
    return <li className="item">
      <span className="label_card">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
    
  
}
StatCards.PropType = {
    label:PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

}