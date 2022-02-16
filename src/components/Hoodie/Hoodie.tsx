/*
import {useEffect, useState,} from 'react'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import styles from './Hoodie.module.scss'

interface HoodieProps {
  baseColor: string
  hoodieStyle: string
  colorName: string
  coloredPart: string
  changeBaseColor: Function
  moveHoodieStyle: Function
  moveColorName: Function
  moveColoredPart: Function
}

export const Hoodie = ({
                         baseColor,
                         hoodieStyle,
                         colorName,
                         coloredPart,
                         changeBaseColor,
                         moveHoodieStyle,
                         moveColorName,
                         moveColoredPart,
                       }: HoodieProps) => {
  const [src, setSrc] = useState<string>()

  useEffect(() => {
    setSrc(require(`../../images/${colorName}/b__${baseColor}_${hoodieStyle}_${colorName}_${coloredPart}.png`))
  }, [baseColor, hoodieStyle, colorName, coloredPart])

  return (
    <div className={styles.container}>
      <FaAngleLeft onClick={() => moveHoodieStyle('left')}/>
      <img
        onClick={() => changeBaseColor()}
        className={styles.image}
        src={src}
        alt="Толстовка"
      />
      <FaAngleRight onClick={() => moveHoodieStyle('right')}/>
    </div>
  )
}
*/
import React from 'react';

const Hoodie = () => {
  return (
    <div>

    </div>
  );
};

export default Hoodie;
