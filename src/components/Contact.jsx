import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [fieldError, setFieldError] = useState({ name: false, email: false, message: false });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleError = key => {
    setFieldError(prevFieldError => {
      return {
        ...prevFieldError,
        [key]: form[key].length ? false : true
      };
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    for (const field in form) {
      handleError(field);
    }
    if (form.name.length && form.email.length && form.message.length) {
      setLoading(true);
      emailjs.send(
        'service_fp456dn',
        'template_noin2um',
        {
          from_name: form.name,
          to_name: 'Daniel',
          from_email: form.email,
          to_email: 'dcochico.20@gmail.com',
          message: form.message
        },
        'ltOqS7ImsRnCm97Gt'
      )
        .then(() => {
          setLoading(false);
          setFieldError({ name: false, email: false, message: false });
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: ''
          });
        }, (error) => {
          setLoading(false);
          alert('Something went wrong.');
        });
    }
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden' >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText} >Get in touch</p>
        <h3 className={styles.sectionHeadText} >Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4' >Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={`${fieldError.name ? "border border-red-500" : "border-none"} bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium`}
            />
          </label>
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4' >Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className={`${fieldError.email ? "border border-red-500" : "border-none"} bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium`}
            />
          </label>
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4' >Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className={`${fieldError.message ? "border border-red-500" : "border-none"} bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium`}
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
          {(fieldError.name || fieldError.email || fieldError.message) && <p className='text-red-500 font-medium mb-4'>Please fill in all required fields.</p>}
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, 'contact');