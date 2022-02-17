import styles from './ColorPanel.module.scss';
import Slider from "react-slick";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {useState} from "react";

interface ColorPanelProps {
  colorNames: string[],
  changeCircleColor: Function
}

const ColorPanel = ({colorNames, changeCircleColor}: ColorPanelProps) => {
  const colors = [
    {
      'left': '#dec663',
      'right': '#c99a84'
    },
    {
      'left': '#ba7e1a',
      'right': '#1b4c6c'
    },
    {
      'left': '#ba99a7',
      'right': '#88a2d3'
    },
    {
      'left': '#a43a6b',
      'right': '#4e7f83'
    },
    {
      'left': '#192a20',
      'right': '#771b1c'
    },
  ];
  const [circleIndex, setCircleIndex] = useState(0);
  const PrevArrow = ({onClick}: any) => {
    return (
      <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
        <FaArrowLeft/>
      </div>
    )
  }
  const NextArrow = ({onClick}: any) => {
    return (
      <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
        <FaArrowRight/>
      </div>
    )
  }
  const settings = {
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (current: number, next: number) => setCircleIndex(next)
  }

  return (
    <div className={styles.colorPanel}>
      <Slider className={styles.slider} {...settings}>
        {colors.map((color, index) => (
          <div className={index === circleIndex ? `${styles.slide} ${styles.active}` : `${styles.slide}`}>
            <div
              key={color.left}
              className={styles.circle}
              style={{background: `linear-gradient(to left, ${color.left} 50%, ${color.right} 50%)`}}
              onClick={() => changeCircleColor(colorNames[index])}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ColorPanel;
