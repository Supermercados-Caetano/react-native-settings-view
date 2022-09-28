// Dependencies
import React from 'react';
import { ActivityIndicator, Switch, SwitchProps } from 'react-native';

// Components
import BaseRow, { BaseRowProps } from '../BaseRow';

/**
 * @interface SwitchRowAsyncProps
 * @description The properties definition of switch row.
 */
export interface SwitchRowAsyncProps extends BaseRowProps {
  /**
   * Flag to checking the input.
   * @default false
   */
  enabled: boolean;

  /**
   * Callback to communicate when the value changed.
   */
  onValueChange?: (isEnabled: boolean) => Promise<boolean>;

  /**
   * The properties pass to checkbox.
   */
  switchProps: SwitchProps;
}

/**
 * @component SwitchRow
 * @author Daniel Mejia
 * @description Row component for settings list with a switch.
 */
export function SwitchRowAsync(props: SwitchRowAsyncProps): React.ReactElement {
  const { enabled, onValueChange, switchProps } = props;
  const [isEnabled, setEnabled] = React.useState(enabled);
  const [loading, setLoading] = React.useState(false);
  const onChange = async (): Promise<void> => {
    setLoading(true);
    const res = await (onValueChange
      ? onValueChange(!isEnabled)
      : Promise.resolve(!isEnabled));
    setLoading(false);
    setEnabled(res);
  };

  return (
    <BaseRow
      {...props}
      rightContent={
        loading ? (
          <ActivityIndicator />
        ) : (
          <Switch {...switchProps} onValueChange={onChange} value={isEnabled} />
        )
      }
    />
  );
}

export default SwitchRowAsync;
