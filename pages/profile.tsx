import { Layout } from "../components/layouts";
import { Grid, Button, Input, Spacer, useInput } from "@nextui-org/react";
import React from "react";
import { ProfileCard } from "@/components/ui";

export default function Profile() {
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value: any) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
  return (
    <Layout title="So cute -Perfil:)">
      <Grid.Container gap={4} justify="center">
        <Grid xs={12} md={2}>
          <form action="/api/form" method="post">
            <Input
              clearable
              bordered
              labelPlaceholder="Name"
              type="text"
              id="first"
              name="first"
              required
            />
            <Spacer y={1} />
            <Input
              clearable
              bordered
              labelPlaceholder="Dirección"
              type="text"
              id="direc"
              name="direc"
              required
            />
            <Spacer y={1} />
            <Input
              clearable
              bordered
              labelPlaceholder="Telefono"
              type="text"
              id="phone"
              name="phone"
              required
            />
            <Spacer y={1} />
            <Input
              clearable
              bordered
              labelPlaceholder="Email"
              type="email"
              id="eme"
              name="eme"
              required
            />
            <Spacer y={1} />

            <Button type="submit">Submit</Button>
          </form>
        </Grid>
        <Grid xs={12} md={2}>
          <ProfileCard />
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
