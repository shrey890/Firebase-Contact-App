import {  ErrorMessage, Field, Form, Formik } from "formik"
import Modal from "./Modal"
import {db} from '../config/Firebase' 
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import * as Yup from 'yup' 
const contactSchemaValidation = Yup.object().shape({
  name:Yup.string().required('Name is Required'),
  email:Yup.string().email('invalid email').required('email is Required')
})
const AddUpdate = ({isopen,onClose,isUpdate,x}) => {
  const addContact = async (contact)=>{
try {
  const contactRef = collection(db,'contacts')
  await addDoc(contactRef,contact)
  
  onClose()
  toast.success(`Contact Added Successfully`)
} catch (error) {
  console.log(error)
}
  }
  const updateContact = async (contact,id)=>{
try {
  const contactRef = doc(db,'contacts',id)
  await updateDoc(contactRef,contact)
  onClose()
  toast.success(`Contact Updated Successfully`)



} catch (error) {
  console.log(error)
}
  }
  return (
    <div>
        	<Modal isopen={isopen} onClose={onClose} >
			<Formik
      validationSchema={contactSchemaValidation}
      initialValues={
        isUpdate 
        ?     {
          name:x.name,
          email:x.email, 
        } : {
          name:'',
          email:'', 
        }
             
            }
            onSubmit={       (values)=>{
isUpdate ?
updateContact(values,x.id)
:
addContact(values)
            }
            }
            >
                <Form className="flex flex-col gap-3 ">
                    <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <Field type='text' className='border h-10 rounded-md p-1'  name='name'/>
                 <div className="text-red-500">

                  <ErrorMessage name="name"/>
                 </div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                    <label htmlFor="email">Email</label>
                    <Field className='border h-10 rounded-md p-1' type='email' name='email'/>
                    <div className="text-red-500" >

                    <ErrorMessage  name="email"/>
                    </div>
                  
                    </div>
                    <button type="submit" className="bg-orange-500 mt-3  rounded-md px-3 py-1.5 self-center ">{ isUpdate ?'Update' : 'Save'}</button>
                </Form>
            </Formik>
		</Modal>
    </div>
  )
}
export default AddUpdate