"use client"; // Obrigatório para lidar com estado e eventos

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AluInput } from "@/components/ui/inputs/Input";
import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";

export const AluShopSearchInput = () => {
    const [keyword, setKeyword] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (keyword.trim()) {
            router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <AluInput
            size="small"
            placeholder="Buscar equipamentos, ferramentas..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
            sx={{
                '& .MuiInputBase-root': {
                    borderRadius: 8,
                    paddingRight: '6px'
                },
                background: 'hsl(30 15% 94%)',
                flex: 1,
                borderRadius: 8
            }}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleSearch}
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
    );
};