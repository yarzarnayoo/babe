import logo from './logo.svg';
import './App.css';
import './ShweShwe.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ShweShwe from './ShweShwe';
import { useState } from 'react';
import img1 from './portfolio/4. page (Detail Drawing) new.jpg';
import img2 from './portfolio/5. page (Detail Drawing).jpg';
import img3 from './portfolio/6. page (Detail Drawing).jpg';
import img4 from './portfolio/7. page (Kitchen).jpg';
import img5 from './portfolio/8. page (Pavilion).jpg';
import img6 from './portfolio/9. page (Residential).jpg';
import img7 from './portfolio/10. page (Residential).jpg';
import img8 from './portfolio/11. page (Restaurant).jpg';

function App() {

  // const shweTitle = ["1. Detail Drawing","2. Detail Drawing","3. Detail Drawing","4. Kitchen","5. Pavilion","6. Residential","7. Residential","8. Restaurant"];
  // const shweImage = ["4. page (Detail Drawing) new.jpg","5. page (Detail Drawing).jpg","6. page (Detail Drawing).jpg","7. page (Kitchen).jpg","8. page (Pavilion).jpg","9. page (Residential).jpg","10. page (Residential).jpg","11. page (Restaurant).jpg"];

  const [title,setTitle] = useState(["1. Detail Drawing","2. Detail Drawing","3. Detail Drawing","4. Kitchen","5. Pavilion","6. Residential","7. Residential","8. Restaurant"]);
  const [image,setImage] = useState([img1,img2,img3,img4,img5,img6,img7,img8]);

  return (
    <div>
      <ShweShwe title={title} image={image} />
    </div>
  );
}

export default App;
