import Modal from 'react-modal';
import { useForm, Controller } from 'react-hook-form';
import toast from 'react-hot-toast';

Modal.setAppElement('#root'); // for accessibility

const RequestViewingModal = ({ isOpen, onRequestClose, property }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // In a real app, you'd send this to your backend
    toast.success(`Viewing request sent for ${property.title}!`);
    onRequestClose();
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      padding: '0',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      maxWidth: '500px',
      width: '90%'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Request a Viewing"
    >
      <div className="bg-white p-8 rounded-xl">
        <h2 className="text-3xl font-serif font-bold mb-2 text-center">Request a Viewing</h2>
        <p className="text-center text-text-light mb-6">For: {property.title}</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input type="hidden" {...register("property_title")} value={property.title} />
          <div>
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input {...register("name", { required: true })} id="name" type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary" />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} id="email" type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary" />
            {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input {...register("phone")} id="phone" type="tel" placeholder="Phone Number (Optional)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea {...register("message")} id="message" rows="4" placeholder="Preferred date, time, or any questions..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"></textarea>
          </div>
          <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 shadow-md transition-colors duration-300">
            Send Request
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default RequestViewingModal; 