import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function HomeSVG(props) {
  return (
    <Svg
      width={16}
      height={18}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.53 1.187l6.982 6.423.363.334v9.493H9.687v-5.906H6.313v5.906H.125V7.973l.33-.33 6.42-6.421a1.195 1.195 0 011.655-.034z"
        fill={props.focused ? '#0B253F' : '#BDBDBD'}
      />
    </Svg>
  );
}

export default HomeSVG;
