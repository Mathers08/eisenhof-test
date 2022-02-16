import {useState} from 'react';
import {ColorPanel, Hoodie} from "./components";
import './App.module.scss';

const baseColors = ['black', 'grey', 'white'];
const hoodieStyles = ['i-o', 'l-r', 'none'];
const colorNames = ['banana-apricot', 'mango-ibiza', 'pale-pink-heavenly', 'pink-happiness-caribbean', 'tarragon-poppy'];
const coloredParts = ['all', 'hood-only', 'pocket-only'];

export const App = () => {
  const [baseColor, setBaseColor] = useState<string>(baseColors[0]);
  const [hoodieStyle, setHoodieStyle] = useState<string>(hoodieStyles[0]);
  const [colorName, setColorName] = useState<string>(colorNames[0]);
  const [coloredPart, setColoredPart] = useState<string>(coloredParts[0]);

  const changeBaseColor = () => {
    const index = baseColors.indexOf(baseColor)
    if (index === baseColors.length - 1) {
      setBaseColor(baseColors[0])
    } else {
      setBaseColor(baseColors[index + 1])
    }
  };
  const changeHoodieStyle = (direction: 'left' | 'right') => {
    const index = hoodieStyles.indexOf(hoodieStyle)
    if (direction === 'left') {
      setHoodieStyle(hoodieStyles[index - 1])
      if (index === 2) {
        setColoredPart(coloredParts[0])
      }
    } else {
      setHoodieStyle(hoodieStyles[index + 1])
      if (index === 1) {
        setColoredPart(coloredParts[coloredParts.length - 1])
      }
    }
  };
  const changeCircleColor = (color: string) => setColorName(color);
  const changeColoredPart = (direction: 'left' | 'right') => {
    const index = coloredParts.indexOf(coloredPart)
    if (direction === 'left') {
      setColoredPart(coloredParts[index - 1])
    } else {
      setColoredPart(coloredParts[index + 1])
    }
  };

  return (
    <>
      <Hoodie
        baseColor={baseColor}
        hoodieStyle={hoodieStyle}
        colorName={colorName}
        coloredPart={coloredPart}
        hoodieStyles={hoodieStyles}
        coloredParts={coloredParts}
        changeBaseColor={changeBaseColor}
        changeHoodieStyle={changeHoodieStyle}
        changeColoredPart={changeColoredPart}
      />
      <ColorPanel
        colorNames={colorNames}
        changeCircleColor={changeCircleColor}
      />
    </>
  )
}
