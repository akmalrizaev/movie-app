import { TextFieldProps } from './text-field.props';
import { FieldHookConfig, useField } from 'formik';

const TextField = ({ ...props }: TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);
  return (
    <label className="inline-block w-full">
      <input type="text" placeholder="Email" className="input" {...props} />
    </label>
  );
};

export default TextField;
