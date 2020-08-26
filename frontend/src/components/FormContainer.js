import React from 'react';

export default function FormContainer(props) {
  return (
    <div>
      <div className="justify-content-md-center">
        <div>{props.children}</div>
      </div>
    </div>
  );
}
