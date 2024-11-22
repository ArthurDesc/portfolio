const SplineViewer = () => {
  return (
    <div className="w-full h-full bg-background">
      <iframe 
        src='https://my.spline.design/wishyouabloblyday-6b48f653e311a5fc54eb22e02d05e9df/?transparent=1&background=transparent'
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          padding: 0,
          margin: 0,
          display: 'block',
          background: 'transparent'
        }}
        allowTransparency="true"
        title="Spline Scene"
      />
    </div>
  );
};

export default SplineViewer;

