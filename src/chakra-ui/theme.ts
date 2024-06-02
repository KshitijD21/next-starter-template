import { type ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {

};

export function useExtendedChakraTheme(theme: Partial<ThemeConfig>) {
    return extendTheme({ ...config, ...theme });
}
