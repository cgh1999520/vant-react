import React, { useState } from 'react';
import Switch from './';

import '../../styles/stories.scss';

export default {
  title: 'Switch',
  component: Switch
};

export const BasicUsage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='storybook__container'>
      <Switch onChange={(active) => setIsActive(active)} active={isActive} />
    </div>
  );
};

export const DisableUsage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='storybook__container'>
      <Switch
        disable
        onChange={(active) => setIsActive(active)}
        active={isActive}
      />
    </div>
  );
};

export const LoadingUsage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='storybook__container'>
      <Switch
        loading
        onChange={(active) => setIsActive(active)}
        active={isActive}
      />
    </div>
  );
};

export const CustomizeSizeUsage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='storybook__container'>
      <Switch
        size={40}
        onChange={(active) => setIsActive(active)}
        active={isActive}
      />
    </div>
  );
};

export const CustomizeColorUsage = () => {
  const [isActive, setIsActive] = useState(false);
  const onChange = (active: any) => {
    setIsActive(active);
    console.log('current status：' + active);
  };

  return (
    <div className='storybook__container'>
      <Switch
        onChange={onChange}
        activeColor='red'
        inactiveColor='blue'
        active={isActive}
      />
    </div>
  );
};

export const AsyncUsage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onChange = (active: any) => {
    setLoading(true);
    setTimeout(() => {
      setIsActive(active);
      setLoading(false);
      console.log('current status：' + active);
    }, 3 * 1000);
  };

  return (
    <div className='storybook__container'>
      <Switch
        loading={isLoading}
        onChange={onChange}
        activeColor='red'
        inactiveColor='blue'
        active={isActive}
      />
    </div>
  );
};
