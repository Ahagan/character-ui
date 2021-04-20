import React from 'react';
import { Intent } from '../model/enum/Intent.enum';
import { Priority } from '../model/enum/Priority.enum';
import { ClassUtil } from '../util/ClassUtil';
import './button.scss';

export interface ButtonProps {
  /**
   * Intent is the type of call to action of a button
   */
  intent?: Intent | keyof typeof Intent;
  /**
   * The text to display on the button
   */
  label: string;
  /**
   * The priority of the button in relation to other content
   */
  priority?: Priority | keyof typeof Priority;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  intent = Intent.NONE,
  label,
  onClick,
  priority = Priority.MEDIUM,
}) => {
  const buttonClass = ClassUtil.makeCUIClass('button');
  const intentClass = ClassUtil.makeCUIClass(`intent-${intent}`);
  const priorityClass = ClassUtil.makeCUIClass(`priority-${priority}`);

  return (
    <button
      type='button'
      className={[buttonClass, intentClass, priorityClass].join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
