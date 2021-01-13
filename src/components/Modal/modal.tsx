import React from 'react';

import './modal.css';

const Modal:React.FC = ({
   children
}) => {
   return (
      <div className="modal">
         <div className="content-modal">
            {children}
         </div>
      </div>
   )
}

export default Modal;