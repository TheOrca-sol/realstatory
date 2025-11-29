import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const BookingRequestForm = ({ formspreeId }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));

    const promise = fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    toast.promise(promise, {
      loading: 'Sending request...',
      success: () => {
        reset();
        return 'Request sent! We will get back to you soon.';
      },
      error: 'Oops! There was an error.',
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-light">Name</label>
        <input 
          type="text" 
          id="name" 
          {...register("name", { required: "Name is required" })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>
       <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-light">Email</label>
        <input 
          type="email" 
          id="email" 
          {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }})}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="checkin" className="block text-sm font-medium text-text-light">Check-in</label>
          <input 
            type="date" 
            id="checkin" 
            {...register("checkin", { required: "Check-in date is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
          {errors.checkin && <p className="text-red-500 text-xs mt-1">{errors.checkin.message}</p>}
        </div>
        <div>
          <label htmlFor="checkout" className="block text-sm font-medium text-text-light">Check-out</label>
          <input 
            type="date" 
            id="checkout" 
            {...register("checkout", { required: "Check-out date is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
          {errors.checkout && <p className="text-red-500 text-xs mt-1">{errors.checkout.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-light">Message</label>
        <textarea 
          id="message" 
          rows="4" 
          {...register("message", { required: "Message is required" })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>
      <div>
        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Send Request
        </button>
      </div>
    </form>
  );
};

export default BookingRequestForm; 