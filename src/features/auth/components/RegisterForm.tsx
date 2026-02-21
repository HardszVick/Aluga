import { AluEmailInput, AluPasswordInput, AluForm } from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { AluLink } from "@/components/ui/navigation/Link";
import { useForm } from 'react-hook-form';
import { Button, Card, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";
import { AluAuthRegisterData, AluAuthRegisterSchema } from "../schemas/register";
import { useAluAuthRegisterMutation } from "../hooks/registerMutation";
import { useRouter } from "next/navigation";
import { useAluToast } from "@/components/ui/snackbar/hooks/useToast";

export const AluAuthRegisterForm = () => {
    const { showError, showSuccess } = useAluToast();

    const { mutateAsync, isPending } = useAluAuthRegisterMutation();

    const router = useRouter();

    const onSubmit = async (data: AluAuthRegisterData) => {
        const response = await mutateAsync(data);

        if (!response.success) return showError(response.message);

        router.push('/login');
        showSuccess('Cadastro realizado! Agora você já pode acessar sua conta.');
    }

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(AluAuthRegisterSchema)
    });

    return (
        <Card
            sx={{
                padding: 1.5,
                width: '100%',
                borderRadius: 4,
                maxWidth: 450
            }}
        >
            <CardHeader
                title="Criar conta"
                slotProps={{
                    title: {
                        variant: 'h6',
                        sx: {
                            fontWeight: 900,
                            fontFamily: 'var(--font-logo)'
                        }
                    }
                }}
                sx={{
                    '& .MuiCardHeader-action': {
                        alignSelf: 'center',
                        margin: 0
                    }
                }}
                action={(
                    <AluLink
                        href="/login"
                        sx={{
                            fontWeight: 700
                        }}
                    >
                        Entrar
                    </AluLink>
                )}
            />
            <CardContent>
                <Stack spacing={2} alignItems={'center'}>
                    <AluForm 
                        onSubmit={handleSubmit(onSubmit)}
                        control={control}    
                    >
                        <Stack spacing={2}>
                            <AluEmailInput name="email" />

                            <AluPasswordInput name="password" />

                            <Typography variant="body2" color="text.secondary">
                                Ao criar conta, você concorda com os{' '}
                                <AluLink href="/termos" underline="hover">
                                    Termos de Serviço{' '}
                                </AluLink>
                                e a{' '}
                                <AluLink href="/privacidade" color="primary">
                                    Política de Privacidade
                                </AluLink>
                                .
                            </Typography>

                            <Button color="gradient" type="submit" loading={isPending}>
                                Criar conta
                            </Button>
                        </Stack>
                    </AluForm>

                    <Divider sx={{ alignSelf: 'stretch' }}>
                        <Typography variant="body2" fontWeight={'bold'} color="#8a7c75">
                            OU
                        </Typography>
                    </Divider>

                    <Button variant="outlinedBranded" color="secondary">
                        Google
                    </Button>

                    <Typography color="text.secondary">
                        Já possui uma conta?{' '}
                        <AluLink href={'login'}>
                            Entrar
                        </AluLink>
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}