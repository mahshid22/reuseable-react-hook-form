import { useState } from "react";
import Layout from "@/components/layout";
import Box from "@mui/material/Box";
import PostFrom from "@/components/postFrom";
import SubmitButton from "@/components/submitButton";
import InputText from "@/components/mui-form-components/inputText";
import PageHead from "@/components/Head";

import styles from "../../styles/PostForm.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import InputRadio from "@/components/mui-form-components/inputRadio";
import InputDropdown from "@/components/mui-form-components/inputDropdown";
import InputSwitch from "@/components/mui-form-components/inputSwitch";
import InputMultiCheckbox from "@/components/mui-form-components/inputMultiCheckbox";
import FormSlider from "@/components/mui-form-components/muiSlider";
import InputDate from "@/components/mui-form-components/datePicker";
const defaultValues = {
  name: "fsdf",
  mobile: "",
  description: "",
};

const options = [
  {
    id: 0,
    label: "Option 1",
    value: "1",
  },
  {
    id: 1,
    label: "Option 2",
    value: "2",
  },
  {
    id: 2,
    label: "Option 3",
    value: "3",
  },
];

const selectOptions = [
  {
    label: "Dropdown Option 1",
    value: "1",
    id: 0,
  },
  {
    label: "Dropdown Option 2",
    value: "2",
    id: 1,
  },
];

const checkboxOptions = [
  {
    label: "Checkbox Option 1",
    value: "1",
  },
  {
    label: "Checkbox Option 2",
    value: "2",
  },
];
export default function Form() {
  const { handleSubmit, control, setValue } = useForm(defaultValues);
  const [formData, setFormData] = useState({});
  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
  };
  return (
    <Box
      className={styles.formPaper}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>New Post</h2>
      <PostFrom>
        <InputText name="name" label="name" control={control} />
        <InputText name="mobile" label="mobile" control={control} />
        <InputText
          name="description"
          label="description"
          multiline
          rows={4}
          control={control}
        />
        <InputRadio
          name="radio"
          label="MUI radio"
          control={control}
          options={options}
        />
        <InputDropdown
          name="dropDown"
          label="select an option"
          control={control}
          options={selectOptions}
        />
        <InputSwitch name="InputSwitch" label="MUI Switch" control={control} />
        <InputMultiCheckbox
          name="checkboxes"
          label="MUI checkbox"
          control={control}
          options={checkboxOptions}
          setValue={setValue}
        />
        <FormSlider
          name="MUI slider"
          control={control}
          defaultValue={[0, 10]}
          step={1}
          max={10}
        />
        <InputDate
          name="MUI_persian_dp"
          control={control}
          label="MUI jalali datePicher"
          defaultValue={new Date()}
        />
        <SubmitButton />
      </PostFrom>
      <div>
        form data object: <br />
        {JSON.stringify(formData)}
      </div>
    </Box>
  );
}
Form.getLayout = function getLayout(page) {
  return (
    <Layout>
      <PageHead header="Submit new post" />
      {page}
    </Layout>
  );
};
