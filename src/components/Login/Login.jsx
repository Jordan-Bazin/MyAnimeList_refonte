import {
    TextInput,
    PasswordInput,
    Checkbox,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import './login.css'

export default function Login() {
    return (
        <Container className='login'>
            <Title className='titre'>
                Welcome back!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{' '}
                <a href="#" size="sm" onClick={(event) => event.preventDefault()}>
                    Create account
                </a>
            </Text>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group position="apart" mt="lg">
                    <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                    <a onClick={(event) => event.preventDefault()} href="#" size="sm">
                        Forgot password?
                    </a>
                </Group>
                <Button fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container >
    );
}