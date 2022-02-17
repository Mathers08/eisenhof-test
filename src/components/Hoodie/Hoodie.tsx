import {useEffect, useState} from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import styles from './Hoodie.module.scss';

interface HoodieProps {
  baseColor: string,
  hoodieStyle: string,
  colorName: string,
  coloredPart: string,
  hoodieStyles: string[],
  coloredParts: string[],
  changeBaseColor: Function,
  changeHoodieStyle: Function,
  changeColoredPart: Function
}

const Hoodie = ({
   baseColor,
   hoodieStyle,
   colorName,
   coloredPart,
   hoodieStyles,
   coloredParts,
   changeBaseColor,
   changeHoodieStyle,
   changeColoredPart,
}: HoodieProps) => {
  const [image, setImage] = useState<string>();

  const conditionLeftHS = hoodieStyles.indexOf(hoodieStyle) !== 0;
  const conditionLeftCP = coloredParts.indexOf(coloredPart) !== 0 && hoodieStyle !== 'none';
  const conditionRightHS = hoodieStyles.indexOf(hoodieStyle) !== hoodieStyles.length - 1;
  const conditionRightCP = coloredParts.indexOf(coloredPart) !== coloredParts.length - 2 && hoodieStyle !== 'none';

  const EmptyDiv = () => <div style={{width: 40, height: 40}}/>

  useEffect(() => {
    setImage(require(`../../images/${colorName}/b__${baseColor}_${hoodieStyle}_${colorName}_${coloredPart}.png`));
  }, [baseColor, hoodieStyle, colorName, coloredPart]);

  return (
    <div className={styles.container}>
      <div className={styles.arrows}>
        {conditionLeftHS
          ? <FaAngleLeft size={40} onClick={() => changeHoodieStyle('left')}/> : <EmptyDiv/>}
        {conditionLeftCP
          ? <FaAngleLeft size={40} onClick={() => changeColoredPart('left')}/> : <EmptyDiv/>}
      </div>

      <div className={styles.imageBlock}>
        <img onClick={() => changeBaseColor()} className={styles.image} src={image} alt="Hoodie"/>
      </div>

      <div className={styles.arrows}>
        {conditionRightHS
          ? <FaAngleRight size={40} onClick={() => changeHoodieStyle('right')}/> : <EmptyDiv/>}
        {conditionRightCP
          ? <FaAngleRight size={40} onClick={() => changeColoredPart('right')}/> : <EmptyDiv/>}
      </div>
    </div>
  )
}

export default Hoodie;
