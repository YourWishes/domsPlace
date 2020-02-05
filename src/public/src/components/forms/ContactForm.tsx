import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Input, TextArea } from '@objects/interactive/Input';
import { Button, ButtonGroup } from '@objects/interactive/Button';
import * as yup from 'yup';
import { Panel } from '@objects/feedback/Panel';
import { Heading2 } from '@objects/typography/Heading';
import { sendMail } from '@api/SendMail';

export interface ContactFormProps {

}

const FormValidator = yup.object().shape({
  name: yup.string().max(128).required(),
  email: yup.string().email().required(),
  message: yup.string().required()
})

export const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit, errors, formState } = useForm({
    validationSchema: FormValidator, mode: 'onChange'
  });

  const [ pending, setPending ] = React.useState(false);
  const [ success, setSuccess ] = React.useState(false);

  const onSubmit = async (data:any) => {
    setPending(true);

    //await new Promise(resolve => setTimeout(resolve, 3000));

    await sendMail(
      '',
      '',
      ''
    );
    
    setPending(false);
    setSuccess(true);
    console.log('Send', pending);
  };

  return success ? <>
    <Panel theme="success">
      <Heading2>Thanks for contacting</Heading2>
    </Panel>
    <p>
      Thank you for your message, I will be in touch shortly to follow up
      (generally within a couple of days).
    </p>
    <p>
      In the meantime why not check out my social channels?
    </p>
  </> : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register} error={errors.name}
        disabled={pending} label="Your name" name="name" placeholder="Who am I talking to?"
      />

      <Input
        register={register} error={errors.email}
        disabled={pending} name="email" label="Your email" placeholder="How can I reach you?"
      />

      <TextArea
        register={register} error={errors.message}
        disabled={pending} 
        label="Message" name="message" placeholder="What's on your mind?"
        rows={5}
      />

      <ButtonGroup>
        <Button
          disabled={pending || !formState.dirty || (formState.dirty && !formState.isValid)}
          pending={pending}
          theme="primary" type="submit"
        >
          Submit
        </Button>
      </ButtonGroup>
    </form>
  )
}