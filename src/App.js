import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";

/* Change debug to `true` to see the invisible Buttons */
export const debug = false;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/intro-1.png">
              <Button to="/intro-1" x="600" y="300" w="40" h="30" />
            </Screen>
          }
        />
        <Route
          path="/intro-1"
          element={
            <Screen image="/intro-2.png">
              <Button to="/intro-2" x="600" y="300" w="40" h="30" />
            </Screen>
          }
        />
        <Route
          path="/intro-2"
          element={
            <Screen image="/frame-1.png">
              <Button to="/intro-3" x="245" y="210" w="200" h="30" />
              <Button to="/intro-4" x="245" y="295" w="250" h="30" />
            </Screen>
          }
        />
        <Route
          path="/intro-3"
          element={
            <Screen image="/frame-2.png">
              <Button to="/intro-4" x="450" y="210" w="50" h="30" />
              <Button to="/intro-4" x="245" y="295" w="250" h="30" />
            </Screen>
          }
        />
        <Route
          path="/intro-4"
          element={
            <Screen image="/frame-3.png">
              <Button to="/intro-5" x="600" y="125" w="80" h="30" />
            </Screen>
          }
        />
        <Route
          path="/intro-5"
          element={
            <Screen image="/frame-4.png">
              <Button to="/intro-6" x="455" y="50" w="60" h="25" />
              <Button to="/intro-6" x="250" y="190" w="120" h="30" />
              <Button to="/intro-2" x="380" y="190" w="90" h="30" />
            </Screen>
          }
        />
        <Route
          path="/intro-6"
          element={
            <Screen image="/frame-5.png">
              <Button to="/intro-7" x="455" y="50" w="60" h="25" />
            </Screen>
          }
        />
        <Route
          path="/intro-7"
          element={
            <Screen image="/frame-6.png">
              <Button to="/intro-8" x="600" y="125" w="80" h="30" />
            </Screen>
          }
        />
        <Route
          path="/intro-8"
          element={
            <Screen image="/frame-7.png">
              <Button to="/intro-9" x="455" y="50" w="60" h="25" />
              <Button to="/intro-9" x="250" y="190" w="120" h="30" />
              <Button to="/intro-2" x="380" y="190" w="90" h="30" />
            </Screen>
          }
        />
        <Route
          path="/intro-9"
          element={
            <Screen image="/frame-8.png">
              <Button to="/intro-5" x="150" y="430" w="330" h="90" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
