import { FaRegUser } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/Firebase";
import AddUpdate from "./AddUpdate";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";
const ContactList = ({x}) => {
	const {onClose,onOpen,isopen} = useDisclouse()
	const deleteContact = async(id) =>{
		try {
			await deleteDoc(doc(db,'contacts',id))
			toast.success(`Contact Deleted Successfully`)
		} catch (error) {
			console.log(error)
		}
	}
  return (
    <div>
	<div className="flex p-2 justify-between rounded-md mt-4  text-black items-center bg-dark-yellow" key={x.id}>
							<FaRegUser  className="text-orange-700  text-3xl"/>
					<div className="  ">
						<h2 className="font-extrabold">{x.name}</h2>
						<a href={`mailto:${x.email}`} className="underline hover:text-blue-800 hover:font-bold">{x.email}</a>
					</div>
					<div className="text-2xl gap-3 flex">
					<FaRegEdit   onClick={onOpen}     className="cursor-pointer" />
					<RiDeleteBin6Line onClick={()=>deleteContact(x.id)} className="cursor-pointer text-red-600" />
					</div>
						</div>
						<AddUpdate isopen={isopen} onClose={onClose} x={x} isUpdate={true}/>

    </div>
  )
}

export default ContactList