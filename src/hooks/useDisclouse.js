import { useState } from "react"

const useDisclouse = () => {
	const [isopen,setOpen] = useState(false)
    const onOpen = () =>{
		setOpen(true)
	}
	const onClose = () =>{
		setOpen(false)
	}
  return {onClose,onOpen,isopen}
}

export default useDisclouse