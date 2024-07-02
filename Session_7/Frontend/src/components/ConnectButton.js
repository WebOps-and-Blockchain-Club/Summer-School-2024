import React from 'react';

const ConnectButton = ({ initialize, user }) => {
  return (
    <div>
      {!user && <button onClick={initialize}>Connect MetaMask</button>}
    </div>
  );
};

export default ConnectButton;
