import React from "react"
import { Section } from "../index"
import PropTypes from "prop-types"

const Contact = ({ title, subTitle, description }) => {
  return (
    <Section
      tagName="contact"
      title={title}
      subTitle={subTitle}
      description={description}
    >
      <form
        action="https://formsubmit.co/yolit.zacarias@gmail.com"
        method="POST"
        className="flex flex-col gap-4 items-center max-w-auto md:w-1/2 mx-auto mt-12"
      >
        <input
          className="w-full pl-4 p-2 ring-1 ring-purple-400 rounded-lg focus:ring-purple-600 focus-visible:ring-purple-600 dark:bg-slate-700"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="w-full pl-4 p-2 ring-1 ring-purple-400 rounded-lg focus:ring-purple-600 focus-visible:ring-purple-600 dark:bg-slate-700"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="w-full pl-4 p-2 ring-1 ring-purple-400 rounded-lg focus:ring-purple-600 focus-visible:ring-purple-600 dark:bg-slate-700"
          cols="30"
          rows="10"
          placeholder="Message..."
          name="message"
        ></textarea>
        <button
          className="px-6 py-2 bg-purple-800 text-white font-semibold rounded-lg shadow-sm transition duration-300 delay-75 hover:scale-105 hover:bg-purple-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Section>
  )
}

Contact.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
}

export default Contact
