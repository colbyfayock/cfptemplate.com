import ClassName from 'models/classname';

import styles from './FormRow.module.scss';

const FormRow = ({ children, className }) => {
  const formRowClassName = new ClassName(styles.formRow);

  formRowClassName.addIf(className, className);

  return (
    <div className={formRowClassName.toString()}>
      { children }
    </div>
  )
}

export default FormRow;