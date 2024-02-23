import { Button, FloatingLabel } from "flowbite-react";

const accessKey = "YOUR_ACCESS_KEY";
export default function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      id="form"
      className="needs-validation flex flex-col gap-5"
      noValidate
    >
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="checkbox" className="hidden sr-only" name="botcheck" />

      <FloatingLabel
        variant="outlined"
        label="Full Name"
        name="full_name"
        required
        type="text"
        color="error"
        helperText="Please provide your full name."
      />
      <FloatingLabel
        variant="outlined"
        label="Email Address"
        required
        type="email"
        name="email"
        color="error"
        helperText="Please provide a valid email address."
      />
      <FloatingLabel
        variant="outlined"
        label="Your Message"
        name="message"
        required
        type="text"
        color="error"
        helperText="Please enter your message."
      ></FloatingLabel>

      <Button type="submit" size="lg" className="self-end">
        Send Message
      </Button>
      <div id="result" className="mt-3 text-center"></div>
    </form>
  );
}
