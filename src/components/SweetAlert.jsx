import React from 'react'

import Swal from 'sweetalert2';
 

const SweetAlert = ({ type, options, onConfirm }) => {
  switch (type) {
    case 'confirmation':
      Swal.fire({
        title: options.title || 'Are you sure?',
        text: options.text || "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: options.confirmButtonText || 'Yes, do it!',
        cancelButtonText: options.cancelButtonText || 'No, cancel!',
        
        customClass: {
          confirmButton: 'btn btn-success mr-3',
          cancelButton: 'btn btn-danger',
        },
         
      }).then((result) => {
        if (result.isConfirmed && onConfirm) {
          onConfirm();
        }
      });
      break;

    case 'toast':
      Swal.fire({
        icon: options.icon || 'success',
        title: options.title || 'Success!',
        text: options.text || 'Action completed successfully.',
        toast: true,
        position: options.position || 'top-end',
        showConfirmButton: false,
        timer: options.timer || 3000,
        timerProgressBar: true,
        customClass: {
          popup: 'colored-toast',
        },
      });
      break;
    
    case 'dialogue':
      Swal.fire({
        title: options.title || "Good job!",
        text: options.text || 'You clicked the button!',
        icon: options.icon || 'success',
      });
      
    default:
      console.error('Unknown alert type');
      break;
  }
};

export default SweetAlert;
