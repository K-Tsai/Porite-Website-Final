import React from 'react';
import PoriteFrontPage from '../pictures/PoriteFrontPage.jpg';

class Description extends React.Component {
  render() {
    return (
      <img
        alt="Meaning"
        src={PoriteFrontPage} fluid
        id="poriteMeaning"
        class="img-fluid"
      />
    );
  }
}

export default Description;