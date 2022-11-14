import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [stateForm, setStateForm] = useState(initialForm)

    
    
    const setValueForm = ({target}) => {
      const {name, value} = target;
      
      setStateForm({
           ...stateForm,
            [name]: value
           });
    };

    const resetForm = () => {
      setStateForm(initialForm);
    };
    
    
  return {
    stateForm,
    setValueForm,
    resetForm
  }
}
