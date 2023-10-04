import React from "react";
import Image from "next/image";
import { Container, Box, Flex, Button } from "@radix-ui/themes";
const Top: React.FC = () => {
    return (
        <Box width="100%">
            <Container size="3">
                <Flex justify="between">
                    <Box py="3">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/next.svg"
                            alt="Next.js Logo"
                            width={180}
                            height={37}
                            priority
                        />
                    </Box>
                    <Box py="3">
                        <Flex gap="3">
                            <Button>登录</Button>
                            <Button>注册</Button>
                            <button>EN</button>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};
export default Top;
