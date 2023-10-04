import { Container, Flex, Box } from "@radix-ui/themes";
const Footer: React.FC = () => {
    return (
        <Container
            size="3"
            className="bg-slate-100 absolute bottom-0 w-full py-5"
        >
            <Flex direction="column" justify="center" align="center" py="3">
                <Box>版权所有：Galaxy</Box>
                <Box>京ICP备05002886号-1</Box>
                <Box>意见反馈：Xxxxxxxx</Box>
            </Flex>
        </Container>
    );
};

export default Footer;
