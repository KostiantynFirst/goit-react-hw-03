import { PhonebookForm, PhonebookFormContainer, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn, ErrMessageStyled } from "./ContactForm.styled";
import { Formik,  } from "formik";
import * as Yup from "yup";


// const ContactForm = ({ handleSubmit, name, number, onInputName, onInputNumber }) => {


//        const initialValues = { name: '', number: '' }
    
//         const validationSchema = Yup.object().shape({
//         name: Yup.string()
//           .matches(
//             /^[A-Z][a-zA-Z]*( [A-Z][a-zA-Z]*)+$/,
//             'Name must consist of two or more words separated by a space, where each word starts with a capital letter'
//           )
//           .required('Name is required'),
//         number: Yup.string()
//           .required('Phone number is required')
//           .matches(/^\+/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
//           .matches(
//             /^[\d\s\x28\x29\x2D\x2B]+$/,
//             'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//           ),
//       })

  
//     return (
//         <Formik
//             initialValues={initialValues}
//             onSubmit={handleSubmit}
//             validationSchema={validationSchema}>
            
//             <PhonebookForm onSubmit={handleSubmit}>
         
//         <PhonebookFormContainer>
//             <PhonebookFormLabel htmlFor="name"> Name: </PhonebookFormLabel>
//             <PhonebookFormInput   type="text"
//                                   value={name}
//                                   name="name"
//                                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                                   required
//                                   placeholder="Enter name"
//                         onChange={(e) => onInputName(e, 'name')} />
//         </PhonebookFormContainer>
        
//         <PhonebookFormContainer>
//             <PhonebookFormLabel htmlFor="number"> Number: </PhonebookFormLabel>
//             <PhonebookFormInput   type="tel"
//                                   value={number}
//                                   name="number"
//                                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                                   required
//                                   placeholder="Tel number"
//                         onChange={(e) => onInputNumber(e, 'number')} />
//         </PhonebookFormContainer>
        
        
//             <PhonebookBtn type="submit">Add Contact</PhonebookBtn>

//           </PhonebookForm>
//         </Formik>

//     );
// }

// export default ContactForm;


const ContactForm = ({ handleSubmit }) => {

  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[A-Z][a-zA-Z]*( [A-Z][a-zA-Z]*)+$/,
        'Name must consist of two or more words separated by a space, where each word starts with a capital letter'
      )
      .required('Name is required'),
    number: Yup.string()
      .required('Phone number is required')
      .matches(
        /^[\d\s\(\)\-\+]+$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <PhonebookForm onSubmit={handleSubmit}>
          <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="name">Name:</PhonebookFormLabel>
            <PhonebookFormInput
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <ErrMessageStyled name="name" component="div" />
          </PhonebookFormContainer>

          <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="number">Number:</PhonebookFormLabel>
            <PhonebookFormInput
              type="tel"
              name="number"
              placeholder="Enter number"
            />
            <ErrMessageStyled name="number" component="div" />
          </PhonebookFormContainer>

          <PhonebookBtn type="submit">Add Contact</PhonebookBtn>
        </PhonebookForm>
      )}
    </Formik>
  );
};

export default ContactForm;


