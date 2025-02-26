import { useState, useEffect } from 'react';

const Crosshair = () => {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const handleLockChange = () => {
      setIsLocked(!!document.pointerLockElement);
    };

    document.addEventListener('pointerlockchange', handleLockChange);
    return () =>
      document.removeEventListener('pointerlockchange', handleLockChange);
  }, []);

  if (!isLocked) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '16px',
        height: '16px',
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '16px',
          height: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '2px',
          height: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      />
    </div>
  );
};

export default Crosshair;