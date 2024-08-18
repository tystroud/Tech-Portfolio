import { useForm } from "react-hook-form";
import '../styles/Contact.scss';
import { motion } from 'framer-motion';
import { fadeIn } from '../components/motion';

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const body = data.body;
    const subject = data.subject;
    
    const myEmail = "tyeishastroud@gmail.com";
    const mailToLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + email + ", Message: " + body)}`;
    window.location.href = mailToLink;
  }

  return (
    <main className="contact-container">
      <motion.section className="form-container"
      variants={fadeIn('left', 0.8)}
      initial="hidden"
      animate="show"
      viewport={{once: false, amount: 0.2}}>
        <motion.h1
        variants={fadeIn('right', 0.5)}
        initial="hidden"
        animate="show"
        viewport={{once: false, amount: 0.8}}>Let's Connect</motion.h1>

        <p>I am currently available to join a team or company.
        Additionally, I am looking for collaborations to develop apps and expand my expertise as a full stack developer. Please feel free to contact me for any questions or to simply say hi.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">
            <p>Your Email</p>
            <input
              {...register("email", { required: true })}
              type="email" 
              id="email" 
              placeholder="Enter your email here"
              required
            />
          </label>
          <label htmlFor="subject">
            <p>Subject</p>
            <input 
              {...register("subject", { required: true })}
              type="text" 
              id="subject"
              placeholder="Enter your subject here"
              required
            />
          </label>
          <label htmlFor="body">
            <p>Body</p>
            <textarea
              {...register("body", { required: true })}
              id="body" 
              placeholder="Enter your message here"
              required
            />
          </label>
          <button type="submit">Send Email</button>
        </form>
      </motion.section>
    </main>
  );
}

export default Contact;


