const ContactForm = () => {
  return (
    <div className="space-y-3">
      <div className="relative">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" id="name" className="form-control" />
      </div>
      <div className="relative">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" id="email" className="form-control" />
      </div>
      <div className="relative">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input type="text" id="subject" className="form-control" />
      </div>
      <div className="relative">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea id="message" className="form-control"></textarea>
      </div>
      <button className="h-14 bg-lime-400 px-10 flex items-center text-stone-950 font-bold rounded-[54px] gap-3 group">
        SUBMIT
      </button>
    </div>
  );
};
export default ContactForm;
