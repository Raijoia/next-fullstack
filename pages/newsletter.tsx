import React from 'react';

import Box from '@src/components/Box/Box';
import Button from '@src/components/Button/Button';
import Image from '@src/components/Image/Image';
import Text from '@src/components/Text/Text';

import { BaseComponent } from '@src/theme/BaseComponent';

function useForm({ initialValues }) {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleChange(event) {
      const { name, value } = event.target;
      setValues({ ...values, [name]: value });
    }
  };
}

export default function NewsletterScreen() {
  const form = useForm({
    initialValues: {
      email: ''
    }
  });

  return (
    <Box
      styleSheet={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // validar
          if (!form.values.email.includes('@')) {
            alert('Email inválido');
            return;
          }
          alert('Email cadastrado com sucesso');
          // enviar para o servidor o email da pessoa
        }}
      >
        <Box
          styleSheet={{
            alignItems: 'center',
            width: '100%',
            maxWidth: '400px',
            padding: '16px'
          }}
        >
          <Image
            src="https://github.com/Raijoia.png"
            alt="Foto do Rai"
            styleSheet={{
              borderRadius: '100%',
              width: '100px',
              marginTop: '16px',
              marginBottom: '16px'
            }}
          />
          <Text variant="heading2">Newsletter do Raí</Text>
          <NewsletterTextField
            name="email"
            placeholder="Digite seu E-mail"
            value={form.values.email}
            onChange={form.handleChange}
          />
          <Box>
            <Text>Seu email é: {form.values.email}</Text>
          </Box>
          <Button
            fullWidth
            styleSheet={{
              marginTop: '16px'
            }}
          >
            Cadastrar
          </Button>
        </Box>
      </form>
    </Box>
  );
}

interface NewsletterTextFieldProps {
  placeholder: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function NewsletterTextField(props: NewsletterTextFieldProps) {
  return (
    <Box
      styleSheet={{
        maxWidth: '300px',
        width: '100%'
      }}
    >
      <BaseComponent
        as="input"
        {...props}
        styleSheet={{
          border: '1px solid #000',
          borderRadius: '4px',
          padding: '8px',
          width: '100%'
        }}
      />
    </Box>
  );
}
