import './App.module.scss'
import {
  useEffect,
  useState,
} from 'react'
import {
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa'
import { ColorPanel } from '../ColorPanel/ColorPanel'
import styles from '../Hoodie/Hoodie.module.scss'

const baseColors = ['black', 'grey', 'white']
const hoodieStyles = ['i-o', 'l-r', 'none']
const colorNames = ['banana-apricot', 'mango-ibiza', 'pale pink-heavenly', 'pink happiness-caribbean', 'tarragon-poppy']
const coloredParts = ['all', 'hood-only', 'pocket-only']

export const App = () => {
  const [baseColor, setBaseColor] = useState<string>(baseColors[0])
  const [hoodieStyle, setHoodieStyle] = useState<string>(hoodieStyles[0])
  const [colorName, setColorName] = useState<string>(colorNames[0])
  const [coloredPart, setColoredPart] = useState<string>(coloredParts[0])
  const [src, setSrc] = useState<string>()

  useEffect(() => {
    setSrc(require(`../../images/${colorName}/b__${baseColor}_${hoodieStyle}_${colorName}_${coloredPart}.png`))
  }, [baseColor, hoodieStyle, colorName, coloredPart])

  const moveBaseColor = () => {
    const index = baseColors.indexOf(baseColor)
    if (index === baseColors.length - 1) {
      setBaseColor(baseColors[0])
    } else {
      setBaseColor(baseColors[index + 1])
    }
  }
  const moveHoodieStyle = (direction: 'left' | 'right') => {
    const index = hoodieStyles.indexOf(hoodieStyle)
    if (direction === 'left') {
      setHoodieStyle(hoodieStyles[index - 1])
    } else {
      setHoodieStyle(hoodieStyles[index + 1])
      if (index === 1) {
        setColoredPart(coloredParts[coloredParts.length - 1])
      }
    }
  }
  const moveColorName = (direction: 'left' | 'right') => {
    const index = colorNames.indexOf(colorName)
    if (direction === 'left') {
      setColorName(colorNames[index - 1])
    } else {
      setColorName(colorNames[index + 1])
    }
  }
  const moveColoredPart = (direction: 'left' | 'right') => {
    const index = coloredParts.indexOf(coloredPart)
    if (direction === 'left') {
      setColoredPart(coloredParts[index - 1])
    } else {
      setColoredPart(coloredParts[index + 1])
    }
  }
  console.log(src)
  return (
    <>
      <div className={styles.container}>
        {!(hoodieStyles.indexOf(hoodieStyle) === 0) && <FaAngleLeft onClick={() => moveHoodieStyle('left')}/>}
        <img
          onClick={() => moveBaseColor()}
          className={styles.image}
          src={src}
          alt="Толстовка"
        />
        {!(hoodieStyles.indexOf(hoodieStyle) === hoodieStyles.length - 1) && <FaAngleRight onClick={() => moveHoodieStyle('right')}/>}
      </div>
      <ColorPanel/>
    </>
  )
}
