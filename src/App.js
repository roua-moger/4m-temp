import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";
import screen1 from "../public/screen-1.png";
import screen2 from "../public/screen-2.png";
import screen3 from "../public/screen-3.png";
import screen4 from "../public/screen-4.png";
import screen5 from "../public/screen-5.png";
import screen6 from "../public/screen-6.png";
import screen7 from "../public/screen-7.png";
import screen8 from "../public/screen-8.png";
import screen9 from "../public/screen-9.png";
import screen10 from "../public/screen-10.png";
import screen11 from "../public/screen-11.png";
import screen12 from "../public/screen-12.png";
import screen13 from "../public/screen-13.png";
import screen14 from "../public/screen-14.png";

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
            <Screen image={screen1}>
              <Button to="/screen2" x="530" y="500" w="140" h="40" />
            </Screen>
          }
        />
        <Route
          path="/screen2"
          element={
            <Screen image={screen2}>
              <Button to="/screen3" x="530" y="500" w="140" h="40" />
            </Screen>
          }
        />
        <Route
          path="/screen3"
          element={
            <Screen image={screen3}>
              <Button to="/screen4" x="530" y="500" w="140" h="40" />
            </Screen>
          }
        />
        <Route
          path="/screen4"
          element={
            <Screen image={screen4}>
              <Button to="/screen5" x="530" y="500" w="140" h="40" />
            </Screen>
          }
        />
        <Route
          path="/screen5"
          element={
            <Screen image={screen5}>
              <Button to="/screen6" x="355" y="350" w="118" h="40" />
            </Screen>
          }
        />
        <Route
          path="/screen6"
          element={
            <Screen image={screen6}>
              <Button to="/screen7" x="355" y="350" w="118" h="40" />
            </Screen>
          }
        />
        <Route
          path="/screen7"
          element={
            <Screen image={screen7}>
              <Button to="/screen8" x="578" y="212" w="163" h="40" />
              <Button to="/screen5" x="508" y="72" w="393" h="40" />
            </Screen>
          }
        />
        <Route
          path="/screen8"
          element={
            <Screen image={screen8}>
              <Button to="/screen9" x="680" y="178" w="117" h="40" />
            </Screen>
          }
        />
        <Route
          path="/screen9"
          element={
            <Screen image={screen9}>
              <Button to="/screen10" x="680" y="178" w="117" h="40" />
            </Screen>
          }
        />
        <Route
          path="/screen10"
          element={
            <Screen image={screen10}>
              <Button to="/screen11" x="578" y="212" w="163" h="40" />
            </Screen>
          }
        />

        <Route
          path="/screen11"
          element={
            <Screen image={screen11}>
              <Button to="/screen12" x="1099" y="57" w="37" h="37" />
              <Button to="/screen12" x="948" y="508" w="186" h="40" />
            </Screen>
          }
        />
        <Route
          path="/screen12"
          element={
            <Screen image={screen12}>
              <Button to="/screen13" x="141" y="273" w="243" h="61" />
              <Button to="/screen13" x="607" y="289" w="80" h="40" />
              <Button to="/screen14" x="370" y="508" w="280" h="40" />
            </Screen>
          }
        />
        <Route
          path="/screen13"
          element={
            <Screen image={screen13}>
              <Button to="/screen12" x="629" y="508" w="285" h="40" />
              <Button to="/screen12" x="941" y="508" w="186" h="40" />
              <Button to="/screen12" x="1099" y="57" w="37" h="37" />
            </Screen>
          }
        />
        <Route
          path="/screen14"
          element={
            <Screen image={screen14}>
              <Button to="/screen12" x="1099" y="57" w="37" h="37" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
