import styles from './ColorPanel.module.scss';

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

  return (
    <div className={styles.footer}>
      {colors.map((color, index) => (
        <div
          key={color.left}
          className={styles.circle}
          style={{background: `linear-gradient(to left, ${color.left} 50%, ${color.right} 50%)`}}
          onClick={() => changeCircleColor(colorNames[index])}
        />
      ))}
    </div>
  );
};

export default ColorPanel;
