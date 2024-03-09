import UIInput from "../../components/atoms/UIInput";
import useFormDynamic, { FormProps } from "../../hooks/useForm";

const UIFormDynamic = ({
  form,
  buttonText,
  handleChangeForm,
  onSubmit,
}: FormDynamicProps) => {
  const { formDynamic, handleChange, isFormValid, getValues } =
    useFormDynamic(form);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!isFormValid()) {
      return;
    }
    const formValues = getValues();
    onSubmit(formValues);
  };

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      {Object.entries(formDynamic).map(([key, field]) => (
        <UIInput
          key={key}
          className="w-full"
          type={field.type}
          value={field.value}
          placeholder={field.placeholder}
          isValid={field.isValid}
          errors={field.errors}
          onChange={(value) => {
            handleChange(key, value, field.validators);
            handleChangeForm && handleChangeForm(key, field.value);
          }}
        />
      ))}
      <button
        type="submit"
        className="my-8 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:shadow-outline"
      >
        {buttonText}
      </button>
    </form>
  );
};

interface FormDynamicProps {
  form: FormProps;
  buttonText: string;
  handleChangeForm?: (key: string, value: any) => void;
  onSubmit: (formValues: any) => void;
}

export default UIFormDynamic;
