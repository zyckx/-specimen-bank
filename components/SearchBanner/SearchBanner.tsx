"use client";
import * as React from "react";
import {
    Container,
    Box,
    Flex,
    Text,
    TextField,
    Button,
} from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
const SearchBanner: React.FC = () => {
    return (
        <Container className="h-96 bg-[url('https://t7.baidu.com/it/u=263697791,3168833444&fm=193&f=GIF')] bg-no-repeat bg-cover">
            <Container
                size="3"
                className="flex justify-center items-center h-96"
            >
                <Flex direction="column" justify="center" align="center">
                    <Box>
                        <Text size="8" weight="bold">
                            中国生物多样性信息中心
                        </Text>
                        <Text size="3" weight="bold">
                            Chinese Academy of Sciences
                        </Text>
                    </Box>
                    <Box>
                        <Flex justify="between">
                            <TextField.Root>
                                <TextField.Slot>
                                    <MagnifyingGlassIcon
                                        height="16"
                                        width="16"
                                    />
                                </TextField.Slot>
                                <TextField.Input placeholder="Search the docs…" />
                            </TextField.Root>
                            <Button>高级检索</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Container>
    );
};

export default SearchBanner;
