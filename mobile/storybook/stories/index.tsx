import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { displayName } from '../../app.json';
import Welcome from './Welcome';

storiesOf(displayName, module).add('welcome', () => <Welcome />);
