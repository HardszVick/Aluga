import { useState } from "react";
import { useRouter } from "next/navigation";
import { AluInput } from "@/components/ui/form/inputs/Input";
import { Search } from "@mui/icons-material";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AluSearchData, AluSearchSchema } from "../schemas/search";
import { AluForm } from "@/components/ui/form";

export const AluShopSearchInput = () => {
    const router = useRouter();

    const { control, handleSubmit } = useForm({
        resolver: zodResolver(AluSearchSchema)
    })

    const onSubmit = ({ keyword }: AluSearchData) => {
        if (keyword?.trim()) {
            router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
        }
    };

    return (
        <Box flex={1}>
            <AluForm control={control} onSubmit={handleSubmit(onSubmit)}>
                <AluInput
                    name="keyword"
                    placeholder="Buscar equipamentos, ferramentas..."
                    sx={{
                        '& .MuiInputBase-root': {
                            borderRadius: 8,
                            paddingRight: '6px'
                        },
                        background: 'hsl(30 15% 94%)',
                        borderRadius: 8
                    }}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleSubmit(onSubmit)}
                                        edge="end"
                                        sx={({ palette }) => ({
                                            background: palette.primary.gradient,
                                            width: '32px',
                                            height: '32px',
                                            margin: '0px',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                            transition: 'transform 0.2s, filter 0.2s',
                                            '&:hover': {
                                                filter: 'brightness(1.1)',
                                                transform: 'scale(1.05)',
                                                background: palette.primary.gradient,
                                            },
                                            '&:active': {
                                                transform: 'scale(0.95)',
                                            }
                                        })}
                                    >
                                        <Search sx={{ fontSize: '1.2rem', color: '#fff' }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </AluForm>
        </Box>
    );
};