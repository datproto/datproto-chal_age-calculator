import { animated, useSpring } from 'react-spring';

interface INumberProps {
  maxValue: number;
}

export default function Counter({ maxValue }: INumberProps) {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: maxValue },
    delay: 200,
    config: {
      mass: 1,
      tension: 170,
      friction: 10
    }
  });

  return <animated.span>{number.to((n: number) => n.toFixed(0))}</animated.span>;
}