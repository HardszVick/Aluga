import { AluEmailInput, AluForm, AluPasswordInput } from "@/components/ui/form";
import { AluLink } from "@/components/ui/navigation/Link";
import { Button, Card, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";
import { useAluAuthLoginMutation } from "../hooks/loginMutation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AluAuthLoginData, AluAuthLoginSchema } from "../schemas/login";
import { useRouter } from "next/navigation";
import { useAluToast } from "@/components/ui/snackbar/hooks/useToast";

export const AluAuthLoginForm = () => {
    const { showError, showSuccess } = useAluToast();

    const { mutateAsync, isPending } = useAluAuthLoginMutation();

    const router = useRouter();

    const onSubmit = async (data: AluAuthLoginData) => {
        const response = await mutateAsync(data);

        if (!response.success) return showError(response.message);

        router.push('/');
        showSuccess('Login efetuado com sucesso.');
    }

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(AluAuthLoginSchema)
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
                title="Entrar"
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
                        href="/register"
                        sx={{
                            fontWeight: 700
                        }}
                    >
                        Criar conta
                    </AluLink>
                )}
            />

            <CardContent>
                <Stack spacing={2} alignItems={'center'}>
                    <AluForm control={control} onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={2}>
                            <AluEmailInput name="email" />

                            <AluPasswordInput name="password" />

                            <Button color="gradient" type="submit" loading={isPending}>
                                Entrar
                            </Button>
                        </Stack>
                    </AluForm>

                    <AluLink href={'/'} alignSelf={'flex-end'}>
                        Esqueceu a senha?
                    </AluLink>

                    <Divider sx={{ alignSelf: 'stretch' }}>
                        <Typography variant="body2" fontWeight={'bold'} color="#8a7c75">
                            OU
                        </Typography>
                    </Divider>

                    <Button variant="outlinedBranded" color="secondary">
                        Google
                    </Button>

                    <Typography>
                        Novo no Aluga Fácil?{' '}
                        <AluLink href={'register'}>
                            Criar conta
                        </AluLink>
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}