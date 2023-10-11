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
        <Container className="h-96 bg-[url('https://www.cvh.ac.cn/public/images/background_b.jpg')] bg-no-repeat bg-cover">
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
                    <Box className="w-2/4">
                        <Flex justify="between">
                            <TextField.Root className="w-10/12">
                                <TextField.Slot>
                                    <MagnifyingGlassIcon
                                        height="16"
                                        width="16"
                                    />
                                </TextField.Slot>
                                <TextField.Input placeholder="Search the docs…" />
                            </TextField.Root>
                            <Box>
                                <Button color="indigo">高级检索</Button>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Container>
    );
};

export default SearchBanner;
