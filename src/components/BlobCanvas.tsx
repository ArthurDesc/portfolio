import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";

const BlobCanvas: React.FC = () => {
  return (
    <div className="container">
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <Blob />
      </Canvas>
    </div>
  );
};

export default BlobCanvas;