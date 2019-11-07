import React from 'react';
import './search-box.css';


export default props => (

  <div className="search-box">
    <label className="search-box__label">
      <span>Search for</span>
      <input
        onChange={props.handleChange}
        className="search-box__input"
        type="search"
        placeholder="Adrian Bent" />
    </label>
  </div>

)