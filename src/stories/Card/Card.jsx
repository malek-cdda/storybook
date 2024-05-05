import React from 'react';
import PropTypes from 'prop-types';
export const Card = ({label,backgroundColor,primary,size ,...props}) => {
    return (
        <div 
        {...props}
        >
            <div className='border bg-red-400 text-white'>
                <div>This is Heading Tag - 1</div>
                <h1>This is sub title</h1>
            </div>
        </div>
    );
};
Card.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should theCard be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     *Card contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
 Card.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
  };