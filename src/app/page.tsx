"use client";

import AluInputNumber from "@/components/ui/InputNumber";
import AluPasswordInput from "@/components/ui/password";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function MuiTestPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <AluInputNumber></AluInputNumber>
      <AluPasswordInput></AluPasswordInput>
      <Typography variant="h4" gutterBottom>
        Teste MUI no Next 🚀
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Página simples pra validar se o Material UI está funcionando.
      </Typography>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <TextField label="Email" fullWidth />
            <TextField label="Senha" type="password" fullWidth />

            <Box display="flex" gap={2}>
              <Button variant="contained" color="primary" fullWidth>
                Login
              </Button>
              <Button variant="outlined" color="secondary" fullWidth>
                Cancelar
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
