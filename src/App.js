import Playground from './Playground/Playground';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <>
      <Playground />
      <Analytics />
    </>
  );
}

export default App;
