import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from "./config/Firebase";
import ContactList from "./components/ContactList";
import AddUpdate from "./components/AddUpdate";
import useDisclouse from "./hooks/useDisclouse";
import {  ToastContainer } from "react-toastify";
/* Example if using CSS */
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";

function App() {
	const [contact, setContact] = useState([])
	const {onClose,onOpen,isopen} = useDisclouse()
 const filterContact = async (e) => {
    const value = e.target.value.toLowerCase();

    try {
      const contactsRef = collection(db, 'contacts');
      const snapshot = await getDocs(contactsRef);

      const contactLists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value)
      );

      setContact(filteredContacts);
    } catch (error) {
      console.error(error);
    }
  };
	  
	useEffect(() => {
		const getContacts = async () => {
			try {
				const contactsRef = collection(db,'contacts')
onSnapshot(contactsRef,(snapshot)=>{
	const contactLists =  snapshot.docs.map((doc)=>({
		id:doc.id,
		...doc.data(),
	}
	))
	setContact(contactLists)
	return contactLists
})
			}
			catch (error){
				console.log(error)
			}
		}
		getContacts()
	}, [])
	return (
		<>
		<div className="m-auto max-w-[370px] ">
			<Navbar />
			<div className="flex justify-center gap-2  items-center">
				<div className="relative flex items-center  ">
					<FaSearch className="absolute text-white ml-1  text-2xl" />
					<input onChange={filterContact} type="search" className="  h-10 text-white pl-9  flex-grow border border-white bg-transparent rounded-md" placeholder="search contact" />
				</div>
				<div >
					<CiSquarePlus onClick={onOpen} className="text-white text-5xl  cursor-pointer" />
				</div>
			</div>
			<div>
			{ 
  contact.length === 0 ? <NotFound /> :
  contact.map((x) => (
    <ContactList key={x.id} x={x} />
  ))
}


			</div>
		</div>
	<AddUpdate isopen={isopen} onClose={onClose} />	
	<ToastContainer position="bottom-right" stacked/>
		</>
	);
}
export default App;
