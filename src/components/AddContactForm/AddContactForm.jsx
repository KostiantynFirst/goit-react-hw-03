import { PhonebookForm, PhonebookFormContainer, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn  } from "./AddContactForm.styled";

const AddContactForm = ({handleSubmit, name, number, onInputName, onInputNumber}) => {
   
    return (
        <PhonebookForm onSubmit={handleSubmit}>
         
        <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="name"> Name: </PhonebookFormLabel>
            <PhonebookFormInput   type="text"
                                  value={name}
                                  name="name"
                                  pattern="^[a-zA-Z\u0400-\u04FF\s'\x2D]+$"
                                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                  required
                                  placeholder="Enter name"
                                  onChange={(e) => onInputName(e, 'name')} />
        </PhonebookFormContainer>
        
        <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="number"> Number: </PhonebookFormLabel>
            <PhonebookFormInput   type="tel"
                                  value={number}
                                  name="number"
                                  pattern="^[\d\s\x28\x29\x2D\x2B]+$"
                                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                  required
                                  placeholder="Tel number"
                                  onChange={(e) => onInputNumber(e, 'number')} />
        </PhonebookFormContainer>
        
        
            <PhonebookBtn type="submit">Add Contact</PhonebookBtn>

          </PhonebookForm>

    );
}

export default AddContactForm;


// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { PhonebookForm, PhonebookBtn } from "./AddContactForm.styled";

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, "Name must be at least 3 characters long")
//     .max(50, "Name must be less than 50 characters long")
//     .required("Name is required"),
//   number: Yup.string()
//     .min(3, "Number must be at least 3 characters long")
//     .max(50, "Number must be less than 50 characters long")
//     .required("Number is required"),
// });

// const AddContactForm = ({ handleSubmit }) => {
//   return (
//     <PhonebookForm>
//       <Formik
//         initialValues={{ name: "", number: "" }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ values, errors, touched, handleSubmit }) => (
//           <Form>
//             <Field
//               component="input"
//               type="text"
//               name="name"
//               placeholder="Enter name"
//               required
//             />
//             <ErrorMessage name="name" component="div" className="error" />

//             <Field
//               component="input"
//               type="tel"
//               name="number"
//               placeholder="Tel number"
//               required
//             />
//             <ErrorMessage name="number" component="div" className="error" />

//             <PhonebookBtn type="submit">Add Contact</PhonebookBtn>
//           </Form>
//         )}
//       </Formik>
//     </PhonebookForm>
//   );
// };

// export default AddContactForm;