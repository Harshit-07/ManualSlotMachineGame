import React from 'react';

const Slot = (props) => {

    let x = props.x;
    let y = props.y;
    let z = props.z;

    if (x === y && y === z) {
      return (<>
        <div className="slot_inner">
            <h3>
                {x} {y} {z}
            </h3>
            <h4>This is Matching!</h4>
        </div>
    </>);
    }

    else {
      return (<>
        <div className="slot_inner">
            <h3>
                {x} {y} {z}
            </h3>
            <h4>This is Not Matching!</h4>
        </div>
    </>);
    }
}
  export default Slot;