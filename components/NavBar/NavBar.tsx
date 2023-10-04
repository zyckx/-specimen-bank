import * as React from "react";
import { Container, Box, Flex, Button } from "@radix-ui/themes";
const NavBar = () => {
    return (
        <Box width="100%" className=" text-white bg-slate-400">
            <Container size="3">
                <Flex py="3" justify="start" align="start">
                    <Box px="3">首页</Box>
                    <Box px="3">数据资源</Box>
                    <Box px="3">物种名录</Box>
                    <Box px="3">新闻公告</Box>
                    <Box px="3">规章制度</Box>
                    <Box px="3">技术支持</Box>
                    <Box px="3">实体馆</Box>
                    <Box px="3">关于我们</Box>
                </Flex>
            </Container>
        </Box>
    );
};
export default NavBar;
