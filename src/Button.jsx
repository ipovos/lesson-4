import React from 'react';

export const Button = ({ theme, ...otherProps }) => {
  return (
    <button
      type="button"
      style={{
        color: theme === 'dark' ? '#fff' : '#000',
        background: theme === 'dark' ? '#000' : '#f00',
      }}
      {...otherProps}
    />
  );
};
