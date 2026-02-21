import { Link, LinkProps } from "@mui/material"
import NextLink from "next/link"
import type { LinkProps as NextLinkProps } from "next/link"

type AluLinkProps = Omit<LinkProps, 'component' | 'href'> & {
    href: NextLinkProps['href']
}

export const AluLink = (props: AluLinkProps) => {
    return (
        <Link
            component={NextLink}
            {...props}
        />
    )
}