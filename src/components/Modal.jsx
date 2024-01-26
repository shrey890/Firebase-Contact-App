import { createPortal } from "react-dom";
import { FaRegWindowClose } from "react-icons/fa";
const Modal = ({isopen , children , onClose}) => {
  
  return createPortal(
    
      <>
        {
            isopen && (
                <div className="fixed m-auto  inset-0 z-20 backdrop-blur flex items-center justify-center">
            <div className="   min-h-[200px] max-w-[60%] bg-white p-4 rounded-md">
                <div className="flex justify-end">
                    <FaRegWindowClose onClick={onClose} className="text-4xl cursor-pointer " />
</div>{children}
            </div>
            </div>
   )
        }

    </>
  ,document.getElementById('modal-root'))
}
export default Modal